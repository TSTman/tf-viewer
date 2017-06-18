function scaleToMatch()
{
    var sizeRatio = innerWidth / 946;
    contentFlash.TSetProperty('/', contentFlashSize.T_WIDTH_SCALE_INDEX, scaleFactor);
    contentFlash.TSetProperty('/', contentFlashSize.T_HEIGHT_SCALE_INDEX, scaleFactor);
    contentFlash.TSetProperty('/', contentFlashSize.T_PAN_X_INDEX, 200.67 - (innerWidth - 573) / 192 * 82 );
    contentFlash.TSetProperty('/', contentFlashSize.T_PAN_Y_INDEX, .3 - (innerWidth - 573) / 192 * 95.06 );
    /* contentFlash.style.marginTop = '-50%'; */
}
