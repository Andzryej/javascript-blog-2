'use strict';
/*document.getElementById('test-button').addEventListener('click', function(){
    const links = document.querySelectorAll('.titles a');
    console.log('links:', links);
  });*/
  

const titleClickHandler = function(event){
event.preventDefault();
const clickedElement = this;
    console.log("link was clicked!");

 
   /* [DONE]remove class 'active' from all article links  */
   const activeLinks = document.querySelectorAll('.titles a.active');


   for(let activeLink of activeLinks){
     activeLink.classList.remove('active');
   }
  /* [DONE]add class 'active' to the clicked link */
  clickedElement.classList.add('active');

  /*[DONE] remove class 'active' from all articles */
  
  const activeArticles = document.querySelectorAll('.posts article.active');

  for(let activeArticle of activeArticles){
    activeArticle.classList.remove('active');
  }

  /* get 'href' attribute from the clicked link ZAPYTAC MENTORA O CO TU CHODZI
   */
  let articleSelector = clickedElement.getAttribute("href");
  console.log( articleSelector);

  /* find the correct article using the selector (value of 'href' attribute) */
let targetArticle=document.querySelector(articleSelector);
  /* add class 'active' to the correct article */
  targetArticle.classList.add("active");
  
  
  }
  const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles',
  optArticleTagsSelector=".post-tags .list";
  
  function generateTitleLinks(){
  
    /* remove contents of titleList */
  const titleList=document.querySelector(optTitleListSelector);
  titleList.innerHTML="";
    /* for each article */
    const articles = document.querySelectorAll(optArticleSelector);
    let html = '';
    for(let article of articles){
         
      /* get the article id */
  const articleId=article.getAttribute("id")
  console.log(articleId);

      /* find the title element */
      const articleTitle = article.querySelector(optTitleSelector).innerHTML;
      /* get the title from the title element */
     
      /* create HTML of the link */
      const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
    console.log(linkHTML);
      /* insert link into html variadle */
      html = html + linkHTML;
     
    }
    
    titleList.innerHTML = html;
    const links = document.querySelectorAll('.titles a');
    console.log(links);

    for(let link of links){
    link.addEventListener('click', titleClickHandler);
  }

  }
  
  generateTitleLinks();


  function generateTags(){
    /* find all articles */
    const articles=document.querySelectorAll("article");
  
    /* START LOOP: for every article: */
    for (let article of articles){
      /* find tags wrapper */
      const tagsWrapper=document.querySelector(optArticleTagsSelector);
      /* make html variable with empty string */
      let html="";
      /* get tags from data-tags attribute */
    const dataTags=article.getAttribute("data-tags");
      /* split tags into array */
     const tagsArray= dataTags.split("data-tags");
 
  
      /* START LOOP: for each tag */
      for (let tag of tagsArray){
        /* generate HTML of the link */
        const tagLink = '<li><a href="#tag-' + tag +'">' + tag + '</a></li>';
        console.log(tagLink)
     
        /* add generated code to html variable */
        html=tagLink;
        console.log(html)
      /* END LOOP: for each tag */
      }
      /* insert HTML of all the links into the tags wrapper */
      tagsWrapper.innerHTML=html;
      console.log(tagsWrapper)
    /* END LOOP: for every article: */
    }
  }
  
  generateTags();
