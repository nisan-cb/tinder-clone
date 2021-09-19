import React from 'react';
import '../style/FunctionButtons.css';
import ReplayIcon from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';
import StarRateIcon from '@material-ui/icons/StarRate';
import FavoriteIcon from '@material-ui/icons/Favorite';
import IconButton from '@material-ui/core/IconButton';
import FlashOnIcon from '@material-ui/icons/FlashOn';
function FunctionButtons(){
    return(
        <div className="buttonsBar">
            <IconButton className="button__repeat">
                <ReplayIcon fontSize="large" />
            </IconButton>
            <IconButton className="button__left">
                <CloseIcon fontSize="large" />
            </IconButton>
            <IconButton className="button__star">
                <StarRateIcon fontSize="large" />
            </IconButton>
            <IconButton className="button__right">
                <FavoriteIcon fontSize="large" />
            </IconButton>
            <IconButton className="button__lightning">
                <FlashOnIcon fontSize="large" />
            </IconButton>
        </div>

    );
}


export default FunctionButtons;