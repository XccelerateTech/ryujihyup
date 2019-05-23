One-Page-Pitch ---
there is no dog or pets community + information app or website in hongkong except Facebook community. That’s why I’m thinking it’s a good idea.

so we are thinking a SNS website that pet owners can share stories or information for new pet owners etc. and can upload picture like instagram, make small community of chat group for same kind of pet.(e.g. someone bought shiba dog and then when they sign up if they choose, we automatically recommend them exist shiba community).

And we can have as built-in information, Hong Kong dog park information + location + picture. 
Also pet hotel information as well for someone want to go to travel without pets.

we also can put payment API for donation helping us, 10% of amount goes to pet saving organization.
This purpose is not exactly for getting money donation. I’m thinking of this it’s because we can show employees we can have skill of using 3rd party payment method API.

Specification File ---
1. store every user's data into SQL. 
2. user can upload a photo to profile picture and background page.
3. chat box.
4. friend require function.
5. user can share movie and music through their page.
6. sign up and sign in page. when they sign up, they can choose what pets they have so we can recommend some exist community or built-in information of our website.
7. users can make community of anything they want.
8. as a built-in information, all of the Hong Kong Pet parks address picture etc... pet hospital etc...
9. setting pages, users can change their own information and pets information.
10. Donation page for donating.
11. Logout button for change account or something.
12. Like button

DataBase ---
1. Database for users information. <--- friends list as foreign key?
2. Database for contents. <--- images, movies with users ID as foreign key.
3. Database for community information.
4. Database for chatroom. <--- user to user and community to users.

What we need to read extra documentation for the new functions ---
1. Store images to SQL. *(blob) *(store url to SQL) *(firebase)
2.  

Today ---
1. sing up page, sign in
2. Main page structures in handlebars views