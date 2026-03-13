# PROJECT STEPS

1. Clear the css files & remove unwanted codes from App.jsx
2. Install & add external package in order to style 
    - install material ui
    - add bootstrap cdn link
    - add google fonts cdn link
    - instal react icons
    - Update global css in index.css file
    - update website icon & title
3. Create a folder for pages : inside create component file for each page 
4. Create a folder for components : inside create component file for part of each page 
5. Set up path for each pages
6. Design components
7. To Make api call, 
    - create api folder in src and 
        - create axiosInstance.js file, define axios instance and interceptors in js file. 
        - create apiService,js file where we define common api call steps
    - Create services in src for components to make api call function
        - create js for defining api function so that component can call
## Genaral React Folder Structure
    Mern Folder Structure
        src
        ├── api
        │    ├── axiosInstance.js
        │    ├── apiService.js
        │
        ├── services
        │    ├── componentApiService.js
        │
        ├── components
        ├── pages
        └── App.js

## 

