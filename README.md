### To access the [project](https://curso-node1.herokuapp.com/)

## MongoDB

### To set the environment:
After installing mongodb you need to put a mongo 'bin' folder(C: \ Program Files \ MongoDB \ Server \ 3.4 \ bin) into a windows environment variable 'Path'
* To start mongobd: **mongod**
* To create a "database": **use + database_name**
```
eg. use testDB
It only will create the testDB database after insert a registry. // To select databases: show dbs
```
* To create a collection(collections are similar to SQL tables)
```
db.users.insert({name: 'Leonardo', age: 22}) // will create a users collection and insert a record
```
* To show the collections: show collections
* After that, you can add other records in the Users collection, even using other fields.
```
eg. db.users.insert({name: 'Leonardo', age: 22, profession: 'Programmer'})
```
* To do Selects:
```
eg. db.users.find() // using normal SQL: select * from users
- You can do a select to see in a more structured way:
eg. db.users.find().toArray()
```
* To do Updates:
```
db.users.update({profession: 'Entrepreneur'}, {$ set: {profession: 'Taxi Driver'}}
- To make an update from an specific record:
db.users.update({name: "John"}, {$ set: {"age": 99}} // where is passing the age of Victor to 99
```
* To remove a registry:
```
var document = db.users.findOne({name: 'John'}); // select John
db.users.remove(document); // deletes John
```
* Deleting collections:
```
db.users.drop() // where 'users' is the name of the collection
```
* How to delete databases:
```
db.dropDatabase() // required is using the database you want to drop
```



* Tools to use MongoDB other than by terminal:
	* MongoVue
	* Robomongo
	* MongoLab

## MySQL

In the future you will have to pay to use MySQL, so the creators of MySQL have created another free database, [MariaDB](https://mariadb.org/)



* Tools to work with MySql:
	* Sequelize(ORB is like Hibernate)

* Tools for a graphical view of tables with MySQL:
	* MySQL Workbrench
	* HeidiSql
	* Navicat

## Git

### To commit any change:
1. To create and to change for the branch:
```
git checkout -b bugfix/1361
```
2. Remove the unwanted changed files:
```
git checkout - pom.xml
git checkout - "java/impl/PlatformBackendServer.java"
```
3. Add the changed files:
```
git add .
```
4. To Commit:
```
git commit -m "# APG-1361 - Removed permission check is not required"
```
5. To Push:
```
git push -u source bugfix/apg-1361
```

* To see all local branches:
**git branch --list**

* To see all remote branches:
**git branch -r**

* To delete a local branch:
**git branch -d + local_name_branch**

* To change the name of the local branch:
**git branch -m new_name**

* To create a new tag:
**tag git -a V1.0 -m "my version 1.0"** <br>
**git push origin --tags**


## Java

### Shortcuts:
* **CTRL + SHIFT + O:** to import libraries
* **F4 or Ctrl + Alt + G:** opens as class, method, or property references(such as Visual Studio's Shift + F12)
* **Ctrl + Shift + R:** Like Ctrl +, Visual Studio
* **F3:** goes to method/variable implementation
* **Ctrl + H:** for any text within any source
* **Ctrl + Shift + H:** to search any source file within the workspace
* **Ctrl + Alt + H:** Search in the workspace for all occurrences of the indicator on the cursor is positioned.
* **Ctls + Shift + O:** add imports


## General

* The myApp project was generated from [ExpressJs](http://expressjs.com/en/starter/installing.html)
* To remove the data server from an application you can use [Nodemon](https://nodemon.io/)
* Let's use [Express Load](https://github.com/jarradseers/express-load)
* Let's use [Bootstrap](http://getbootstrap.com/)