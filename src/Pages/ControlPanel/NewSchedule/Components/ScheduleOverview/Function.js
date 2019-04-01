import Api from '../../../../../Api';
import {getRecentSchedules} from '../../Function';
import Modal from 'antd/lib/modal';

export function onSwitchChangeFactory(scheduleId)
{
    return async checked =>
    {
        const requestIsSuccessful = await Api.sendPostChangeScheduleStateRequestAsync(scheduleId, checked);
        if (requestIsSuccessful)
        {
            getRecentSchedules();
        }
    };
}

export function onResumeClickFactory(scheduleId)
{
    return () =>
    {
        Modal.confirm({
            title: '恢复日程',
            content: '确认恢复该日程吗？',
            onOk: async () =>
            {
                await Api.sendPostResumeScheduleRequestAsync(scheduleId);
            },
        });
    };
}

export function onCancelClickFactory(scheduleId)
{
    return () =>
    {
        Modal.confirm({
            title: '取消日程',
            content: '确认取消该日程吗？',
            onOk: async () =>
            {
                await Api.sendPostCancelScheduleRequestAsync(scheduleId);
            },
        });
    };
}

export function onDeleteClickFactory(scheduleId)
{
    return () =>
    {
        Modal.confirm({
            title: '删除日程',
            content: '确认删除该日程吗？',
            okType: 'danger',
            onOk: async () =>
            {
                await Api.sendPostDeleteScheduleRequestAsync(scheduleId);
            },
        });
    };
}

export function onModifyClickFactory(scheduleId)
{
    return () =>
    {

    };
}