// src/responsiveImage.js

/**
 * Responsive Image Component
 * 
 * @param {string} imageUrl - URL of the image.
 * @param {string} altText - Alternative text for the image.
 * @param {number} width - Width of the image.
 * @param {number} height - Height of the image.
 * @param {string} [className=''] - Additional CSS class name for the image container.
 * @returns {HTMLElement} - Image element with responsive attributes.
 */
function createResponsiveImage(imageUrl, altText, width, height, className = '') {
    const imageContainer = document.createElement('div');
    imageContainer.className = `responsive-image ${className}`;
    
    const image = document.createElement('img');
    image.src = imageUrl;
    image.alt = altText;
    image.width = width;
    image.height = height;
    image.loading = 'lazy'; // Lazy loading for better performance
    image.style.maxWidth = '100%'; // Ensure image fits container

    imageContainer.appendChild(image);

    return imageContainer;
}

module.exports = createResponsiveImage;
