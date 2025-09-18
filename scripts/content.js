// [ ] Add icon 32 and icon 16 images
// [ ] Remove background from icon images
// [ ] Instead of hiding taglines, have a way to render 'Opponent' or 'User' instead.



// https://www.chess.com/play/
// https://www.chess.com/play/*
// https://www.chess.com/game/*

// #board-layout-player-top > div.player-component.player-top (The Opponent)
// #board-layout-player-bottom > div.player-component.player-bottom (The User)

// Avatars controlled by img's in divs: div.player-avatar
// Other information controlled by elements in divs: div.player-tagline
// Avatar img elements: img with a class of 'cc-avatar-img'
// Avatar img div: #board-layout-player-top > div.player-component.player-top > div.player-avatar > div > img
// Standardized Avatar: https://www.chess.com/bundles/web/images/black_400.png

// .player-row-top .cc-avatar-component


function hideMainDetails(document) {


    try {
        let taglines = document.querySelectorAll('div.player-tagline');
        taglines.forEach(tagline => {
        tagline.style.visibility = 'hidden';
        });    
    } catch (error) {
        console.error(`An error occurred whilst trying to fetch player element taglines.\nERROR: ${error}`);
    }
    
    // const STANDARDIZED_IMAGE_ELEMENT = `<img class="cc-avatar-img" loading="lazy" src="https://www.chess.com/bundles/web/images/black_400.png" srcset="https://www.chess.com/bundles/web/images/black_400.png 1x, https://www.chess.com/bundles/web/images/black_400@2x.png 2x" alt="Avatar of Opponent" height="40" width="40"></img>`;
    try {
        let opponentImageDiv = document.querySelector('#board-layout-player-top .player-avatar');
        opponentImageDiv.style.visibility = 'hidden';
        
        // Below is the code to set the images to a standardized profile picture (you also have to uncomment the STANDARDIZED_IMAGE_ELEMENT constant above)
        // [ ] Make the standardized image element adaptive (as when you select 'Focus Mode' the image resizes to a bigger version but does not collapse back to its original size when you leave focus mode)
        // opponentImageDiv.innerHTML = STANDARDIZED_IMAGE_ELEMENT;
        
    } catch (error) {
        console.error(`An error occurred whilst trying to change/remove player pictures.\nERORR: ${error}`)
    }

}


const main = (document, window) => {
    
    window.addEventListener('load', () => {
        hideMainDetails(document)

    }, {once: true});
}


main(document, window)