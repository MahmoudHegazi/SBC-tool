

var postsIndex = 1;
const sendDataBtn = document.querySelector("#sendData");

const formInput = document.querySelector("#websiteform");

// posts data
const addPostBtn = document.querySelector("#postInputcreator");

// site data
const siteTitleInput = document.querySelector("#websitename");
const siteHeaderInput = document.querySelector("#siteheader");

const siteHeaderBackground = document.querySelector("#siteheaderbg");

const siteBtnInput = document.querySelector("#btnText");
const siteBtnColorInput = document.querySelector("#btnColor");
const siteBtnAlignInput = document.querySelector("#btn_align");

const siteBtnFunctionInput = document.querySelector("#btnfunction");
const siteBtnFunctionMessageInput = document.querySelector("#btnfunctionMessage");


// submit the data

const postData = async(url = '', data = {}) => {

  console.log(data);
	const response = await fetch(url, {
		method: 'POST',
		credentials: 'same-origin',
		headers: {
			'Content-Type': 'application/json',
		},
		// Body data type must match "Content-Type" header
		body: JSON.stringify(data),
	});

	try {
		const newData = await response.json();
		console.log(newData);
		return newData;
	} catch (error) {
		console.log("error", error);
	}
}


// make website ready

function prepereWebsite() {
let siteTitle = siteTitleInput.value;
let htmlHeader = '<!doctype html><html><head><link rel="stylesheet" href="css/style.css"><title>' +siteTitle+ '</title></head><body>';
let htmlFooter = '<script src="js/app.js"><\/script></body></html>';

let itemContainer = "<div class='holder-container'>";

let btnContainer = "<div class='holder-container btn-container'>";
let btnStart = `${btnContainer}<button id='demo'>`;
let btnEnd = `</button></div>`;


// site header

let siteheader = `<div class='header'>${itemContainer}<h3>${siteHeaderInput.value}</h3></div></div>`;
let selectedBtn = `${btnStart}${siteBtnInput.value}${btnEnd}`;
let btnStlye = `button{background:${siteBtnColorInput.value}} .btn-container{justify-content:${siteBtnAlignInput.value}}`;

let initalStyle = `.holder-container{display: flex;justify-content: center;margin-bottom:10px;} .header{display:block;background:${siteHeaderBackground.value};color:white;text-align:center;}
.post-container-sbc { display: block; padding: 15px; margin: 10px;} .post-container-sbc p{padding:20px;}`;


// functions
let WebsiteScriptCreating = "";
if (siteBtnFunctionInput.value == "logMessage"){
   WebsiteScriptCreating += `document.querySelector('#demo').addEventListener("click", ()=> {console.log('${siteBtnFunctionMessageInput.value}')});`;
} else if (siteBtnFunctionInput.value == "alertMessage") {
   WebsiteScriptCreating += `document.querySelector('#demo').addEventListener("click", ()=> {alert('${siteBtnFunctionMessageInput.value}')});`;
} else{
   WebsiteScriptCreating = WebsiteScriptCreating;
};






// post content
  let postsText= "";
  let postsStyle= "";

  if (postsIndex > 1){
     for (i=1; i < postsIndex; i++) {
     console.log(i);
        let trueindex = i;
        let postHeader =  document.querySelector(`input[data-post='post-head-${trueindex}']`);
        let postContent = document.querySelector(`textarea[data-post='post-content-${trueindex}']`);
        let postContentBg = document.querySelector(`#bg-post-${trueindex}`);
        let postContentColor = document.querySelector(`#color-post-${trueindex}`);
        let postContentAlign = document.querySelector(`#align-post-${trueindex}`);
        let postContentFontSize = document.querySelector(`#size-post-${trueindex}`);
        let postContentFontFamily = document.querySelector(`#family-post-${trueindex}`);


        let singlePostHTML = `<div class='post-container-sbc'>
          <h3 class='post-header'>${postHeader.value}</h3>
          <p class='post-number-${i}'>${postContent.value}</p>
        </div>`;
        let signlePostStyle = `.post-number-${i}{
          font-family: ${postContentFontFamily.value};
          font-size: ${postContentFontSize.value};
          text-align: ${postContentAlign.value};
          color: ${postContentColor.value};
          background: ${postContentBg.value};
        }`;

        postsText += singlePostHTML;
        postsStyle += signlePostStyle;

         console.log(postsText);
     };
  };


  let websiteHTML = `${htmlHeader}${siteheader}${selectedBtn}${postsText}${htmlFooter}`;
  let websiteStyle = `${initalStyle}${btnStlye}${postsStyle}`;
  let websiteScript = WebsiteScriptCreating;
  let websiteObject = {html: websiteHTML, css: websiteStyle, js: websiteScript, title: siteTitleInput.value};
  postData('createwebsite.php', websiteObject);
};



// Posts section

function addPostPlease(){

  sendDataBtn.insertAdjacentHTML('beforebegin',
  `<div class='post-container'><label>Enter Post Header</label>:</br> <input class="post-header" data-post="post-head-${postsIndex}" type="text"></br></br>
  <label>Enter Post Content</label>:</br> <textarea class="post-content" data-post="post-content-${postsIndex}" rows="12" cols="40"></textarea></br>
  <div class='tool-container'>

    <div class="toolinput-container">
    <label>Post Background</label><br/>
    <input id="bg-post-${postsIndex}" type="color">
    </div>
    <div class="toolinput-container">
    <label>Post Color</label><br/>
    <input id="color-post-${postsIndex}" type="color" value="#FFFFFF">
    </div>
    <div class="toolinput-container">
    <label>T</label><br/>
    <select id="align-post-${postsIndex}">
      <option value="left">left</option>
      <option value="center">center</option>
      <option value="right">right</option>
      <option value="justify">justify</option>
    </select>
      <select id="size-post-${postsIndex}">
      <option value="8px">8</option>
      <option value="10px">10</option>
      <option value="11px">11</option>
      <option value="12px">12</option>
      <option value="14px">14</option>
      <option value="16px">16</option>
      <option value="18px">18</option>
      <option value="20px">20</option>
      <option value="21px">21</option>
      <option value="22px">22</option>
      <option value="24px">24</option>
      <option value="28px">28</option>
      <option value="30px">30</option>
      <option value="36px">36</option>
      <option value="38px">38</option>
      <option value="40px">40</option>
    </select>

    <select id="family-post-${postsIndex}">
    <option style='font-family:"Times New Roman";' value='"Times New Roman", Times, serif'>Times New</option>
        <option style='font-family:Arial' value='Arial, Helvetica, sans-serif' selected>Arial</option>

        <option style='font-family:"Lucida Console";' value='"Lucida Console", "Courier New", monospace'>Lucida Console</option>
    <option style="font-family:fantasy, serif;" value="fantasy, serif">Fantasy</option>
    <option style="font-family:Georgia"
    value="Georgia, serif;">Georgia</option>
    </select>
    </div>

  </div>`);

  postsIndex += 1;
}









addPostBtn.addEventListener("click", addPostPlease);

sendDataBtn.addEventListener("click", prepereWebsite);
