describe('$attr', function ()
{
    var $attr = _.$attr;

    $('body').append('<div id="dollarAttr"></div>');

    var $dom = $('#dollarAttr');

    it('get node\'s attribute', function ()
    {
        $dom.append('<div class="getter"></div>');

        var $el = $dom.find('.getter');

        $el.attr('data-one', 'true');
        expect($attr($el, 'data-one')).to.equal('true');
        expect($attr($el.get(0), 'data-one')).to.equal('true');
    });

    it('set node\'s attribute', function ()
    {
        $dom.append('<div class="setter"></div>');

        var $el = $dom.find('.setter');

        $attr($el, 'data-one', 'true');
        expect($el.attr('data-one')).to.equal('true');

        $attr($el, {
            'data-two': 'true',
            'data-three': 'true'
        });
        expect($el.attr('data-two')).to.equal('true');
        expect($el.attr('data-three')).to.equal('true');
    });

    it('remove node\'s attribute', function ()
    {
        $dom.append('<div class="remove"></div>');

        var $el = $dom.find('.remove');

        $el.attr('data-one', 'true')
           .attr('data-two', 'true')
           .attr('data-three', 'true');

        $attr.remove($el, 'data-one');
        expect($el).to.not.have.attr('data-one');
        $attr.remove($el, ['data-one', 'data-two']);
        expect($el).to.not.have.attr('data-two', 'data-three');
    });

    $dom.remove();
});