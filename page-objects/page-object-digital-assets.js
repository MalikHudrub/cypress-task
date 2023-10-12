class DigitalAssets {

    // variables //
    homePage = "/research/";
    requestedData = 'https://fda.forbes.com/research?pageNum=1'
    showMoreData = 'https://fda.forbes.com/research?pageNum=2'

    featuredImageAttr = "src"
    imagePrefix = "https://www.forbes.com/dam/imageserve"

    // selectors //
    featuredTitle = "[class*=FeaturedContent_featuredContentTitle]"
    featuredImage = "[class*=FeaturedContent_featuredContentAsset] img";
    analystInfo = "[class*=OurAnalysts_ourAnalysts] .swiper-slide" //[class*=OurAnalysts_ourAnalysts] .swiper-slide 
    analystName = " div>div>a span"
    analystTitle = " div> div > span"
    analystExpertise = "div> div > span"
    analystImageUrl = "div >div > a img"
    researchStreamCard = "[class*=ResearchPage_researchStreamCard]"
    articleTitle = "div > div > h3 a"
    articleDescription = "div > div > p"
    articleAuthor = "div > div > div > a"
    articleImage = "div > div >  a > img"
    articleLink = "div > div >  a"
    researchPageButton = "[class*=ResearchPage_researchStreamButton]"

    // methods //
    /**
    *
    * @param {type} Name - desc
    */
    function() {
    }

}
export const digitalAssets = new DigitalAssets();

