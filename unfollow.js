function unfollowEverybody() {

    function getUnfollowButtons() {
        var $following = $('.following');
        
        return $following.find('button.user-actions-follow-button');
    }
    
    function getLastBlock($buttons) {
        $buttons = $buttons || getUnfollowButtons();
        
        $lastButton = $buttons.last();
        
        if(!$lastButton)
            return;
        
        return $lastButton.parents('.Grid-cell');;
    }
    
    function goToElement($block, cb) {
        $block = $block || getLastBlock();
        
        if(!$block)
            return;
    
        var options = {
            scrollTop: $block.offset().top
        };
    
        $('html, body').animate(options, 500, cb);
    }
    
    var $buttons = getUnfollowButtons();
    var $lastBlock = getLastBlock($b);
    
    $buttons.click();
    
    goToElement($lastBlock, function() {
        setTimeout(unfollowEverybody, 1000);
    });
}

unfollowEverybody();
