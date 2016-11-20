h3 {line-height: 1.5;}

body {
	background-color: rgb(172, 203, 217);
	font-family: "Lucida Grande", "Lucida Sans Unicode", "Lucida Sans",  "Calibri", Candara, Geneva, Arial, Verdana, sans-serif;
	font-size: 15px;
	line-height: normal;
	color: #33333;
}
a {color: #0F5789;text-decoration: none;}

button {
	background-color: #fdfdfc;
    color: #3b4045;
    border: 1px solid #c3c8cc;
    height: 50px;
    line-height: 29px;
    font-weight: bold;
    font-size: 12px;
    padding: 0px 20px;
    cursor: pointer;
    -webkit-transition: all 0.22s ease-out;
    -moz-transition: all 0.22s ease-out;
    opacity: 1;

    /*drop shadow*/
    -moz-box-shadow: 3px 3px 4px #000;
	-webkit-box-shadow: 3px 3px 4px #000;
	box-shadow: 3px 3px 4px #000;
	-ms-filter: "progid:DXImageTransform.Microsoft.Shadow(Strength=4, Direction=135, Color='#000000')";
	filter: progid:DXImageTransform.Microsoft.Shadow(Strength=4, Direction=135, Color='#000000');
}
button:active {
	-moz-box-shadow: 0px 0px 0px #FFF;
	-webkit-box-shadow: 0px 1px 2px #FFF;
	box-shadow: 1px 1px 2px #FFF;
	-ms-filter: "progid:DXImageTransform.Microsoft.Shadow(Strength=2, Direction=135, Color='#FFFFFF')";
	filter: progid:DXImageTransform.Microsoft.Shadow(Strength=2, Direction=135, Color='#FFFFFF');
}

.instructions-container {
	
	background-color: white;
	width: 1100px;
	height: auto;
	border: 1px solid #3B3B3B;
	margin: 30px auto 15px;
	text-align: center;
}

.general-instructions {
	text-align: left;
	padding-left: 5%;
	padding-right: 5%;
	line-height: 2;
}

.general-instructions ol {
	margin: -20px 0px 20px 20px;
}

.general-instructions .get-started-2 .img-container {
	text-align: center;
}

.instructions-container img {
	margin: 15px;
}

.active-page {
	background-color: #9F9F9F !important;
}

.instructions-paging {
	padding-top: 10px;
}

.instructions-paging li {
    display: inline-block;
    vertical-align: top;
    width: 50px;
    text-align: center;
    background-color: #EAEAEA;
    padding: 4px;
    border: 1px solid #3B3B3B;
    cursor: pointer;
    opacity: 0.85;
    color: #000; 
    /*drop shadow*/
    -moz-box-shadow: 1px 1px 2px #000;
	-webkit-box-shadow: 1px 1px 2px #000;
	box-shadow: 1px 1px 2px #000;
	-ms-filter: "progid:DXImageTransform.Microsoft.Shadow(Strength=2, Direction=135, Color='#000000')";
	filter: progid:DXImageTransform.Microsoft.Shadow(Strength=2, Direction=135, Color='#000000');
}

.instructions-header {
	border-bottom: solid;
	border-width: 1px;
	padding: 10px 0;
	font-weight: bold;
}

.instructions-detail, .button-container{
	padding: 20px 0 40px;

}

.disclaimer-checkbox {
	padding-bottom: 10px;
}

.button-container button {
	width: 450px;
}

button.next, button.back{
	width: 100px;
	margin: 10px 0 30px 700px;
	-moz-box-shadow: 0px 0px 0px #FFF;
	-webkit-box-shadow: 0px 1px 2px #FFF;
	box-shadow: 1px 1px 2px #FFF;
	-ms-filter: "progid:DXImageTransform.Microsoft.Shadow(Strength=2, Direction=135, Color='#FFFFFF')";
	filter: progid:DXImageTransform.Microsoft.Shadow(Strength=2, Direction=135, Color='#FFFFFF');
}

button.back {
	float: right;
	margin: 0px 20px 0px 0px;
}

button.back.main {
	float: left;
	width: 200px;
}