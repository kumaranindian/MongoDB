use local
db
use testdb
show dbs
===================
use student
db.subjects.insert({"name":"AI"})
db.dropDatabase()
==============
use cts
db.createCollection("location")
show dbs
show collections
db.createCollection("department")
db.location.drop()
===============
db.associates.insert([{
"id":4,
"fname":"eeeee",
"lname":"f",
"age":25,
"exp":0
},
{
"id":2,
"fname":"aaaaa",
"lname":"b",
"age":25,
"exp":5
},
{
"id":3,
"fname":"cccc",
"lname":"d",
"age":44,
"exp":8
}])
================
db.associates.find()
========
db.associates.findOne()
===========
db.associates.find(
{
"id":3
}
)
==========
db.associates.find(
{
"age":{$lt:30}
}
)
==========
db.associates.find(
{
"age":{$gt:30}
}
)

==========
db.associates.find(
{
"fname":{$eq:"karthi"}
}
)
======and optr======
db.associates.find(
{
"fname":{$eq:"karthi"},
"age":{$lt:30}

}
)
=======OR optr=====

db.associates.find(
{
  $or:
  [
{"fname":{$eq:"karthi"}},
{"age":{$lt:30}}
]
}
)

=============update document====

db.associates.find()

db.associates.update(
{
  "_id":ObjectId("5b02698ad95c9b16d1e89a4a"),
  
},
{
$set:{
  "fname":"kumaran",
  "age":27,
  "exp":4
}
}
)

====================
db.associates.update(
{
  "fname":"aaaaa",
  
},
{
$set:{
  "fname":"Mani",
}
}
)
=========updating multple records with same fname===========
db.associates.update(
{
  "fname":"aaaaa",
  
},
{
$set:{
  "fname":"Mani",
}
},
(multi:true)
)

==== updating records with save method==
db.associates.save({
 "_id": ObjectId("5b02698ad95c9b16d1e89a4c"),
 "id":3,
 "fname":"varun",
 "lname":"c",
 "age":33,
 "exp":10
})
db.associates.find()
=== delete====
db.associates.remove({
  
  "fname":"Mani"
})
==== deleting the first matches====
db.associates.remove({
  
  "age":{$lt:21}
},1
)

===========retrieving specific field===========

db.associates.find({},{"_id":0,"id":1,"fname":1})

db.associates.find({},{"_id":0,"id":0})

db.associates.find({},{"_id":0,"id":1,"fname":1}).limit(3)  doubt

db.associates.find({},{"_id":0,"id":1,"fname":1}).skip(2).limit(3)

-=sorting======== 1 for asc and -1 for desc

db.associates.find({},{"_id":0,"id":1,"fname":1,"age":1}).sort(
{
 	
  "age":1
}
)
db.associates.find({},{"_id":0,"id":1,"fname":1,"age":1}).sort(
{
 	 "fname":-1
  
}
)


======================================

use lottery

for(i=0;i<1000;++i){
 db.winnerthousand.insert ({
 "id":i,
 "name":"ola"
 }
 )
}

for(i=0;i<1000000;++i){
 db.winnertenlaksh.insert ({
 "id":i,
 "name":"ola"
 }
 )
}

db.winnertenlaksh.find()
  
  use cts
   ===finding max age====
  db.associates.aggregate(
  [
  	{
    $group:
    
    	{"_id":"",MaxAge:{$max:"$age"}
    	}
  	}
  ]
  )
  
  ===finding min age====
    db.associates.aggregate(
  [
  	{
    $group:
    
    	{"_id":"",MinAge:{$min:"$age"}
    	}
  	}
  ]
  )
  === finding max and min based on gender grouping
  
      db.associates.aggregate(
  [
  	{
    $group:	{"_id":"$gender",
    	  MinAge:
    	  {$min:"$age"}
    	}
  	}
  ]
  )
  
  
   db.associates.find()

use admin
db.dropDatabase()

use nodemongo
db.tutorial.find()
   