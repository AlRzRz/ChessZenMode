// [ ] Add icon 32 and icon 16 images
// [ ] Remove background from icon images

// https://www.chess.com/play/
// https://www.chess.com/play/*

// #board-layout-player-top > div.player-component.player-top (The Opponent)
// #board-layout-player-bottom > div.player-component.player-bottom (The User)

// Avatars controlled by img's in divs: div.player-avatar
// Other information controlled by elements in divs: div.player-tagline
// Avatar img elements: img with a class of 'cc-avatar-img'
// Avatar img div: #board-layout-player-top > div.player-component.player-top > div.player-avatar > div > img
// Standardized Avatar: https://www.chess.com/bundles/web/images/black_400.png


// [ ] Current Implementation: Hide taglines and standardize player avatars
// [ ] Instead of hiding taglines, have a way to render 'Opponent' or 'User' instead.



function hideMainDetails(documentElement) {

    // [x] GET PLAYER ELEMENT TAGLINES, LOOP OVER THEM AND SET THEIR VISIBILITY TO HIDDEN

    let taglines = documentElement.querySelectorAll('div.player-tagline');
    taglines.forEach(tagline => {
        tagline.style.visibility = 'hidden';
    });


    // [ ] GET PLAYER AVATARS AND CHANGE THEIR PICTURES TO A STANDARDIZED PICTURE (either get its parent container, empty it, and add a simple image)

    const STANDARDIZED_IMAGE_ELEMENT = '<img class="cc-avatar-img" loading="lazy" src="https://www.chess.com/bundles/web/images/black_400.png" srcset="https://www.chess.com/bundles/web/images/black_400.png 1x, https://www.chess.com/bundles/web/images/black_400@2x.png 2x" alt="Avatar of Opponent" height="40" width="40"></img>'
    let opponentImageDiv = document.querySelector('#board-layout-player-top > div.player-component.player-top > div.player-avatar > div');
    opponentImageDiv.innerHTML = STANDARDIZED_IMAGE_ELEMENT;



}


const main = (documentElement) => {
    hideMainDetails(documentElement)
}


main(document)