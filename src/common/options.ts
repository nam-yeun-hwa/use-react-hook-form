import { ISelectType } from 'types/commonType';

/**
 * 헤더네비게이션path
 */
export const routerPath: Array<ISelectType> = [
	{
		idx: 1,
		value: '/',
		label: 'HOME',
	},
	{
		idx: 3,
		value: '/userManager',
		label: '사용자',
	},
];

/**
 * 사용자권한정보
 */
export const userAuthList: Array<ISelectType> = [
	{
		idx: 1,
		value: '어드민',
		label: '어드민',
	},
	{
		idx: 2,
		value: '일반유저',
		label: '일반유저',
	},
];
