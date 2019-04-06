import React from 'react';
import PropTypes from 'prop-types';
import MODAL_ID from '../../CONSTANT/MODAL_ID';
import OriginalModal from 'antd/lib/modal';
import {connect} from 'react-redux';
import * as Actions from './Actions/Actions';

class Modal extends React.Component
{
    render()
    {
        const {modalId, visible, currentVisibleModalIdSet, hideModal, ...rest} = this.props;
        return (
            <OriginalModal
                visible={currentVisibleModalIdSet.has(modalId)}
                onOk={rest.onExitConfirm ? rest.onExitConfirm : () =>
                {
                    hideModal(modalId);
                }}
                onCancel={rest.onCancel ? rest.onCancel : () =>
                {
                    hideModal(modalId);
                }}
                {...rest} />
        );
    }
}

Modal.propTypes = {
    ...OriginalModal.propTypes,
    modalId: PropTypes.oneOf(Object.values(MODAL_ID)).isRequired,
};

const mapStateToProps = state =>
{
    const {Modal: {currentVisibleModalIdSet}} = state;
    return {currentVisibleModalIdSet};
};

const mapDispatchToProps = {
    hideModal: Actions.hideModalAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);