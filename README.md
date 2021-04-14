# Introduction

Note: In case you choose a different platform to Angular. You can find some useful files like html, css and json mockup data on the main assetss folder. 

## The Scenario
Our application, PlayBook is an innovation platform, a key aspect of innovation is being able to network with other PlayBook members, for that purpose we are adding a feature to be able to browse over all PlayBook users and show them in responsive way.

Please take your time to ask any question that can help you craft your software.


## The API

To avoid external issues and speed-up development we are working with mocked-up data. 

Visit /src/app/mocks to review the mocked-up data and src/models/person to review the model for user information.

However in the second part of the exercise we will be using a fake sample Api from https://reqres.in/

To get all users we should issue an HTTP GET request to: https://reqres.in/api/users

And we will receive a response like that:
```json
{
    "page": 2,
    "per_page": 6,
    "total": 12,
    "total_pages": 2,
    "data": [
        {
            "id": 7,
            "email": "michael.lawson@reqres.in",
            "first_name": "Michael",
            "last_name": "Lawson",
            "avatar": "<https://s3.amazonaws.com/uifaces/faces/twitter/follettkyle/128.jpg>"
        }        {
            "id": 12,
            "email": "rachel.howell@reqres.in",
            "first_name": "Rachel",
            "last_name": "Howell",
            "avatar": "<https://s3.amazonaws.com/uifaces/faces/twitter/hebertialmeida/128.jpg>"
        }
    ]
}
```

To update a user we will issue an HTTP PUT or PATCH request to a users endpoint: https://reqres.in/api/users/2

With a payload similar to below including all the fields we want to update:
```json
{
    "name": "morpheus",
    "job": "zion resident"
}
```
And will receive a response like, including an updateAt field with the timestamp of the update:
```json
{
    "name": "morpheus",
    "job": "zion resident",
    "updatedAt": "2020-01-16T15:48:46.475Z"
}
```
Please be aware that this is a fake api, if the request is well crafted we will receive an HTTP Ok response. By well crafted we mean: is actually issued against a user endpoint and that the payload is a valid json object array like the one depicted above, any field name is valid. 

The API does not persist any update or new field!

It can as well respond to additional endpoints you may need, we can use that to perform gets or updates to other entities than users use: https://reqres.in/api/unknown. Be careful because gets to unknown endpoints return always the same type of payload a color object:

```json
{
    "id": 6,
    "name": "blue turquoise",
    "year": 2005,
    "color": "#53B0AE",
    "pantone_value": "15-5217"
}
```

# Get the code

You can choose where to develop this project. Pick the IDE you are most confortable with. But make sure it runs.

If you are not sure, we recommend **forking** it on [StackBlitz](https://stackblitz.com/github/PlugAndPlayTechCenter/ResponsiveScreening). Don't forget to click on the 'FORK' button!


# Tasks
## Task 1: Bring the data from the REST API to the component and show several users in a tailwind grid.
Once you are done answer these questions:

1. How will you handle backend API errors? Describe in detail the approach and explain why you opted for it
2. How will you implement pagination? Why?
3. How will you store the data retrieved from the backend?
4. Please identify what UNIT and INTEGRATION tests will this component require.


## Task 2: Make a desktop version of this layout which displays when there is enough screen width to accomodate it. You can see the layout you are aiming for in the screenshot below.

Nice to have: Make so by using Tailwind.css

![Desktop version](https://github.com/PlugAndPlayTechCenter/ResponsiveScreening/blob/master/assets/rwd-task.png)


Make it responsive so it can fit into a mobile screen.

Once you are done answer these questions:

1. Which is the best CSS property width solution for making images and videos responsive?
2. What are major CSS properties that need to be avoided while designing responsive web layouts?
3. How you would scale navigation in Mobile Screens?
4. How you will test the responsive nature of your website?

# Wrap-up
We thank you very much for your time and wish you the best of luck in this process.
