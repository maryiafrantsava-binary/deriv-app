import React from 'react';
import { Localize, localize } from '@deriv/translations';
import { DBOT_TABS } from 'Constants/bot-contents';
import { handleOnConfirmAccumulator } from './utils/accumulator-helper-functions';
import { IconAnnounce } from './announcement-components';
import { OpenLiveChatLink } from '@deriv/components';

export type TContentItem = {
    id: number;
    text: string | React.ReactElement;
};

export type TAnnounce = {
    id: number;
    main_title: string;
    confirm_button_text?: string;
    cancel_button_text?: string;
    base_classname: string;
    title: string | React.ReactElement;
    content?: TContentItem[];
    numbered_content?: TContentItem[];
    plain_text?: TContentItem[];
};

export type TAnnouncement = {
    announcement: TAnnounce;
    switch_tab_on_cancel?: number;
    switch_tab_on_confirm?: number;
    onConfirm?: () => void;
    onCancel?: () => void;
    url_redirect?: string;
    should_not_be_cancel?: boolean;
    should_toggle_modal?: boolean;
};

export const ANNOUNCEMENTS: Record<string, TAnnouncement> = {
    MOVING_STRATEGIES_ANNOUNCE: {
        announcement: {
            id: 0,
            main_title: localize('Moving strategies to Deriv Bot'),
            confirm_button_text: localize('Import strategy'),
            base_classname: 'announcement-dialog',
            title: (
                <Localize
                    i18n_default_text='<0>Follow these steps to smoothly transfer your strategies:</0>'
                    components={[<strong key={0} />]}
                />
            ),
            numbered_content: [
                {
                    id: 0,
                    text: localize('Download your Binary Bot strategy in XML format.'),
                },
                {
                    id: 1,
                    text: localize('Import your strategy to Deriv Bot.'),
                },
                {
                    id: 2,
                    text: localize('Run your updated strategy to check its performance.'),
                },
                {
                    id: 3,
                    text: localize('Save the updated strategy for quicker re-imports.'),
                },
            ],
            plain_text: [
                {
                    id: 0,
                    text: (
                        <Localize
                            i18n_default_text='<0>Note</0>: Uploading complex strategies may take some time.Saving them from Deriv Bot ensures quicker access later.If you have questions, contact us via <1/>.'
                            components={[<strong key={0} />, <OpenLiveChatLink className='' key={1} />]}
                        />
                    ),
                },
            ],
        },
        should_not_be_cancel: true,
        should_toggle_modal: true,
        switch_tab_on_confirm: DBOT_TABS.BOT_BUILDER,
    },

    BLOCKLY_ANNOUNCE: {
        announcement: {
            id: 1,
            main_title: localize('Google Blockly v10 update'),
            base_classname: 'announcement-dialog',
            title: localize(
                'We have updated our Blockly system in Deriv Bot from <strong>version 3 to version 10</strong>. This brings:'
            ),
            content: [
                {
                    id: 0,
                    text: localize('Trade Accumulators to build up potential profits with a structured approach.'),
                },
            ],
        },
        should_not_be_cancel: true,
    },

    ACCUMULATOR_ANNOUNCE: {
        announcement: {
            id: 2,
            main_title: localize('Accumulators now on Deriv Bot'),
            confirm_button_text: localize('Try now'),
            cancel_button_text: localize('Learn more'),
            base_classname: 'announcement-dialog',
            title: localize('<strong>Boost your trading strategy with Accumulators</strong>'),
            content: [
                {
                    id: 0,
                    text: localize('Trade Accumulators to build up potential profits with a structured approach.'),
                },
                {
                    id: 1,
                    text: localize('Customise your investment period and price levels to fit your trading goals.'),
                },
                { id: 2, text: localize('Manage risks while capitalising on market opportunities.') },
            ],
        },
        switch_tab_on_cancel: DBOT_TABS.TUTORIAL,
        switch_tab_on_confirm: DBOT_TABS.BOT_BUILDER,
        onConfirm: handleOnConfirmAccumulator,
    },
};

export type TAnnouncementItem = {
    id: string;
    icon: React.ReactElement;
    title: string;
    message: string;
    date: string;
    buttonAction: string;
    actionText: string;
};

export type TNotifications = {
    key: string;
    icon: React.ReactNode;
    title: React.ReactNode;
    message: React.ReactNode;
    buttonAction: (() => void) | false | void;
    actionText: string;
};

export const BUTTON_ACTION_TYPE = {
    MODAL_BUTTON_ACTION: 'modal_button_action',
    REDIRECT_BUTTON_ACTION: 'redirect_button_action',
    NO_ACTION: 'no_action',
};

export const BOT_ANNOUNCEMENTS_LIST: TAnnouncementItem[] = [
    {
        id: 'MOVING_STRATEGIES_ANNOUNCE',
        icon: IconAnnounce,
        title: localize('Moving strategies to Deriv Bot'),
        message: localize('Follow these steps to smoothly transfer your strategies'),
        date: '20 July 2024 00:00 UTC',
        buttonAction: BUTTON_ACTION_TYPE.MODAL_BUTTON_ACTION,
        actionText: '',
    },
    {
        id: 'BLOCKLY_ANNOUNCE',
        icon: IconAnnounce,
        title: localize('Google Blockly v10 update'),
        message: localize('We have updated our Blockly system in Deriv Bot from version 3 to version 10.'),
        date: '20 July 2024 00:00 UTC',
        buttonAction: BUTTON_ACTION_TYPE.MODAL_BUTTON_ACTION,
        actionText: '',
    },
    {
        id: 'ACCUMULATOR_ANNOUNCE',
        icon: IconAnnounce,
        title: localize('Accumulators is now on Deriv Bot'),
        message: localize('Boost your trading strategy with Accumulators.'),
        date: '20 July 2024 00:00 UTC',
        buttonAction: BUTTON_ACTION_TYPE.MODAL_BUTTON_ACTION,
        actionText: '',
    },
];
