// ==UserScript==
// @name        Test
// @namespace   Test
// @include     http://blank.com/*
// @version     1.0
// @grant       none
// @author      ejm
// @require     http://www.parsecdn.com/js/parse-1.5.0.min.js
// ==/UserScript==


function runThis()
{
  console.log( "got here" + new Date().toString() );

  var everybody = [];

  var history = [];
  history.push( {"x":1, "y":2} );
  history.push( {"x":2, "y":3} );
  history.push( {"x":3, "y":4} );
  everybody[ "one" ] = history;

  console.log( "length:" + everybody.length );

  var history2 = [];
  history2.push( {"x":11, "y":21} );
  history2.push( {"x":21, "y":31} );
  history2.push( {"x":31, "y":41} );
  everybody[ "two" ] = history2;

  console.log( "length:" + everybody.length );


  var getBack = everybody[ "one" ];
  console.log( "length:" + getBack.length );
  getBack.push( {x:7, y:8});

  var getBack2 = everybody[ "one" ];
  for (var i = 0; i < getBack2.length; ++i )
  {
    var thing = getBack2[ i ];
    console.log ( "thing:" + thing.x +"," + thing.y);
  }

}

runThis();
