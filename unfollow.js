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
    
    var $b = getUnfollowButtons();
    var $l = getLastBlock($b);
    
    $b.click();
    
    goToElement($l, function() {
        setTimeout(unfollowEverybody, 1000);
    });
}
