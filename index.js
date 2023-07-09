const express = require('express')
const app =  express();
const mongoose = require('mongoose')
const path = require('path')
const methodoverride = require('method-override')

const Product = require('./models/products')
const Account = require('./models/account')
app.use(methodoverride('_method'))

main().catch(err => console.log(err));

async function main() {
 await mongoose.connect('mongodb+srv://ayushm850:ayushmishra@cluster0.oupgqon.mongodb.net/infoSense');

}
  // Static files and view engine setup
  app.use(express.static(path.join(__dirname, 'public')));
  app.set('views', path.join(__dirname, 'views'));
  app.set('view engine', 'ejs');
  app.use(express.urlencoded({ extended: true }));

   //product
   app.get('/products/index', async (req, res) => { 
    const Products = await Product.find({});
    res.render('products/index', { Products });
  });
   // Show favorite products
   app.get('/products/fav', async (req, res) => {
    const Favproducts = await Product.find({ fav: true });
    res.render('products/fav', { Favproducts });
  });
// Show cart products
let user = '';
let session = false;
app.get('/products/cart', async (req, res) => {
  const cartproducts = await Product.find({ cart: true }); 
 
 res.render('products/cart', { cartproducts , user , session });
});
  // Show individual product
  app.get('/products/:id', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.render('products/view', { product });
  });
   
app.use(express.json());
//loginpage
app.get('/login', (req,res) =>{
  res.render('login')
})
//regisPage
app.get('/register', (req,res) =>{
  res.render('register')
})

// Register endpoint
app.post('/register', (req, res) => {
  const { username, password, cpassword, email, number } = req.body;

  // Check if the username is already taken
  Account.findOne({ username })
    .then((existingUser) => { 
      if (existingUser) {
        // Redirect back to the register page with an error query parameter 
        return  res.redirect('/register?message=Username%20already%20exists');
      }

      // Create a new user
      const user = new Account({ username, password, cpassword, email, number });
      user.save()
        .then(() => {
          // Redirect back to the register page with a success query parameter
          res.redirect('/register?message=User%20registered%20successfully');
        })
        .catch((error) => {
          console.error('Error registering user:', error);
          // Redirect back to the register page with an error query parameter
          res.redirect('/register?message=Internal%20Server%20Error');
        });
    })
    .catch((error) => { 
      console.error('Error checking username availability:', error);
      // Redirect back to the register page with an error query parameter
      res.redirect('/register?message=Internal%20Server%20Error');
    });
});


// Login endpoint
app.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    console.log(username, password);

    // Find the user by username
     user = await Account.findOne({ username: username });

    if (!user || user.password !== password) {
      return res.redirect('/login?message=Wrong%20Credentials');
    }
   
    session = true;
    const cartproducts = await Product.find({ cart: true });
    res.render('products/cart', {cartproducts, user , session });
  } catch (error) { 
    console.error('Error logging in:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});


// Homepage
app.get('/', async (req, res) => {
    const Products = await Product.find({});
    res.render('home', { Products });
  });
  
 
  // Add to favorites
  app.get('/products/:id/fav', async (req, res) => {
    const { id } = req.params;
  
    await Product.findByIdAndUpdate(id, { fav: true });
    // const Favproducts = await Product.find({ fav: true });

    // res.render('products/fav',{ Favproducts});
    res.redirect('/products/fav?message=Favorite%20Item%20added%20successfully');
  });

  
  //add to cart
  app.get('/products/:id/cart', async (req, res) => {
    const { id } = req.params;
  
    await Product.findByIdAndUpdate(id, { cart: true });
    // const cartproducts = await Product.find({ cart: true });

    // res.render('products/cart',{ cartproducts});
    res.redirect('/products/cart?message=Added%20Item%20successfully');
  });
  
  

  //remove fav
  app.get('/products/fav/:id', async (req,res) => {
    const { id } = req.params;
    await Product.findByIdAndUpdate(id, { fav: false });
    // const Favproducts = await Product.find({ fav: true });
    // res.render('products/fav', { Favproducts });
    res.redirect('/products/fav?message=Removed%20from%20favorites%20successfully');
  })  
// remove cart
app.get('/products/cart/:id', async (req,res) => {
    const { id } = req.params;
    await Product.findByIdAndUpdate(id, { cart: false });
    // const cartproducts = await Product.find({ cart: true });
    res.redirect('/products/cart?message=Removed%20from%20cart%20successfully');
  
})
  // Show all products
  app.get('/products', async (req, res) => {
    const Products = await Product.find({});
    res.render('products/index', { Products });
  });
  
  //carted items
  // Other routes (e.g., add new product, save new product)
  // ...
  


  // Start the server
  app.listen(8080, () => {
    console.log('Listening to port 8080');
  });
  