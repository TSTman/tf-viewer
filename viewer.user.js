function scaleToMatch()
{
    var sizeRatio = innerWidth / 946;
    var scaleFactor = 234.6 * sizeRatio;
    contentFlash.TSetProperty('/', contentFlashSize.T_WIDTH_SCALE_INDEX, scaleFactor);
    contentFlash.TSetProperty('/', contentFlashSize.T_HEIGHT_SCALE_INDEX, scaleFactor);
    contentFlash.TSetProperty('/', contentFlashSize.T_PAN_X_INDEX, 445.38875 - innerWidth / 2.341);
    contentFlash.TSetProperty('/', contentFlashSize.T_PAN_Y_INDEX, 283.9946875 - innerWidth / 2.01977);
    /* contentFlash.style.marginTop = '-50%'; */
}
