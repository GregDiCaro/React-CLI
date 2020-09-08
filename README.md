holidates
=========

welcome to discover the holidays off in the world

[](https://www.npmjs.com/package/@dicarogreg/holidates#what-is-it-)What is it ?
------------------------------------------------------------------------------

holidates is a tool I created during my training in web development at BeCode Liège, Belgium. It will allow you to display a list of holidays of the current year for the country name you will enter.

[](https://www.npmjs.com/package/@dicarogreg/holidates#how-it-works-)How it works ?
----------------------------------------------------------------------------------

1.  You enter the name of a country in english.
2.  it checks with the [country-list](https://www.npmjs.com/package/country-list) package that the country name entered is correct and supported by the API.
3.  converts the country name into its country code,
4.  makes an HTTP request to the API of the [nager.date](https://date.nager.at/) service.
5.  retrieves the holidays data of the chosen country,
6.  transform the data into a readable and understandable list (date : holiday)

[](https://www.npmjs.com/package/@dicarogreg/holidates#how-to-install-it-)How to install it ?
--------------------------------------------------------------------------------------------

You can install it using npm :

```
npm install @dicarogreg/holidates

```

[](https://www.npmjs.com/package/@dicarogreg/holidates#version)Version
---------------------------------------------------------------------

1.1.1

###### [](https://www.npmjs.com/package/@dicarogreg/holidates#keywords)Keywords

countries holidays

Keywords
--------

none