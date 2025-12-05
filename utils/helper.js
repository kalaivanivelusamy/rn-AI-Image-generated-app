export const getImageDimensions = (aspectRatio,baseSize = 512) => {
    
    const [width, height] = aspectRatio.split(":").map(Number);
    const scaleFactor = baseSize / Math.sqrt(width * height);

    let calculatedWidth = Math.round(width * scaleFactor);
    let calculatedHeight = Math.round(height * scaleFactor);

    // Ensure dimensions are multiples of 16 (integer requirement for many models)
    calculatedWidth = Math.round(calculatedWidth / 16) * 16;
    calculatedHeight = Math.round(calculatedHeight / 16) * 16;
    
    return {
        width: calculatedWidth,
        height: calculatedHeight
    };
}