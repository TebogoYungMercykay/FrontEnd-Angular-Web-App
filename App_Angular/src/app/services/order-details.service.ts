import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }

  // fooddetails 
  
  foodDetails = [
    {
      id:1,
      foodName:"Steak",
      foodDetails:"Something amazing",
      foodPrice:89.50,
      foodImg:"https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC82MDRjNTYxYy0zYzAyLTQ4NTUtYTBkNC1mNjczOWRhYTU3YTUuanBlZw=="
    },
    {
      id:2,
      foodName:"Chicken And Wors",
      foodDetails:"Deep Fried Chicken and Wors",
      foodPrice:78,
      foodImg:"https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC82MDRjNTYxYy0zYzAyLTQ4NTUtYTBkNC1mNjczOWRhYTU3YTUuanBlZw=="
    },
    {
      id:3,
      foodName:"Burger and Chips",
      foodDetails:"Burger",
      foodPrice:37.50,
      foodImg:"https://d1ralsognjng37.cloudfront.net/a507e496-86c3-4896-86e5-b5b25e7573fe.jpeg"
    },
    {
      id:4,
      foodName:"Coca-Cola",
      foodDetails:"Drink",
      foodPrice:14,
      foodImg:"https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvNDBmZWIxOTE3ZjBkZjI2NTMxODkzZWZkNGI2MjFjZGQvNDIxOGNhMWQwOTE3NDIxODM2NDE2MmNkMGIxYThjYzEuanBlZw=="
    },
    {
      id:5,
      foodName:"Something Meaty Pizza",
      foodDetails:"Pizza",
      foodPrice:125,
      foodImg:"https://tb-static.uber.com/prod/image-proc/processed_images/1c8fe1fe019fe692a09c2d63280f2fca/4218ca1d09174218364162cd0b1a8cc1.jpeg"
    },
    {
      id:6,
      foodName:"Meaty TrippleDecker",
      foodDetails:"TrippleDecker",
      foodPrice:119,
      foodImg:"https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvNTM3NWI5MzE1NDNhNzBlMWZkZGVlNzJkNGZlZjY2ZDEvNDIxOGNhMWQwOTE3NDIxODM2NDE2MmNkMGIxYThjYzEuanBlZw=="
    }
  ]


  

}
