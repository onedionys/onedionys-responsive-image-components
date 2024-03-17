// test/test.js

const assert = require('assert');
const createResponsiveImage = require('../src/responsiveImage');

describe('Responsive Image Component', function() {
    it('should return an image element with responsive attributes', function() {
        const imageUrl = 'https://example.com/image.jpg';
        const altText = 'Example Image';
        const width = 800;
        const height = 600;

        const imageElement = createResponsiveImage(imageUrl, altText, width, height);

        assert.equal(imageElement.tagName, 'DIV');
        assert.equal(imageElement.firstChild.tagName, 'IMG');
        assert.equal(imageElement.firstChild.src, imageUrl);
        assert.equal(imageElement.firstChild.alt, altText);
        assert.equal(imageElement.firstChild.width, width);
        assert.equal(imageElement.firstChild.height, height);
        assert.equal(imageElement.firstChild.loading, 'lazy');
        assert.equal(imageElement.firstChild.style.maxWidth, '100%');
    });
});
