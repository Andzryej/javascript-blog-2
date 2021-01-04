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
  
  const links = document.querySelectorAll('.titles a');
  
  for(let link of links){
    link.addEventListener('click', titleClickHandler);}


    const optArticleSelector = '.post',
    optTitleSelector = '.post-title',
    optTitleListSelector = '.titles';
  
  function generateTitleLinks(){
  
    /* remove contents of titleList */
  const titleList=document.querySelector(optTitleListSelector);
  titleList.innerHTML="";
    /* for each article */
    for(let article of optArticleSelector){
         
      /* get the article id */
  const articleId=article.getAttribute("id");
  console.log(articleId); 
}
      /* find the title element */
      const articleTitle = article.querySelector(optTitleSelector).innerHTML;
      /* get the title from the title element */
     
      /* create HTML of the link */
      const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
      console.log(linkHTML)
      /* insert link into titleList */
  
  }
  
  generateTitleLinks();
}
