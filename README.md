# Check out mobile app

* A Shopping cart app built using **React-native, Redux**
* The application is published on Expo: 
***https://expo.io/@ayukiie/Shopping-Cart***

<img src="MobileApp/demo.gif?raw=true" width=300 >


## Instructions for testing

1. Users can add item to cart from Home
2. Users can change the quantity of items in My Cart screen
3. Users can add promotion:
   - Use **"SAVE10"** or **"SAVE20"** as a valid promo code (save 10% and save 20% relatively)
   - Upon invalid code, an error message will be prop to users
   - Users can remove current used code in My Cart screen.
4. Total = subtotal + tax(13%) + promotion (if applied)
 
## App Deploy
- For every push on developer an master branch, a unit test will be run to check the functionality of the code (refer **Mobile/test** and **workflow/testScreens.yml**)
- For every pull request on master, the app will be built again and automately published on Expo (refer to **workflows/publish_mobile_app.yml**)

