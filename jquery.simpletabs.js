(function($){
    $.fn.tabs = function(options) {
        var settings = $.extend({
            'event': 'click'
        }, options);

        var $container = this;
        var $titles = $container.find('.tab-title');
        var $bodys = $container.find('.tab-body');

        var $initialCurrentTitle = $titles.filter('.current');
        if(!$initialCurrentTitle.length) {
            $initialCurrentTitle = $titles.first().addClass('current');
        }

        $bodys.hide();
        $( $initialCurrentTitle.data('target') ).show();

        $titles.bind(settings.event, function(){
            $(this).addClass('current').siblings().removeClass('current');
            $bodys.hide();
            $( $(this).data('target') ).show();
        });

        return this;
    };
})(jQuery);
