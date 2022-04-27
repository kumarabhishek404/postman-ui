import { GETRequest, GETBodyData, SETParamKey, SETHistoryList, SETHeadersPayload } from '../actionTypes/index';

const initState = {
	data: [],
	bodyData: '',
	paramKey: '',
	historyList: [
		{
			time: 'April 26',
			history: [
				{ method: 'GET', link: "www.google.com" }
			]
		},
		{
			time: 'April 25',
			history: [
				{ method: 'GET', link: "www.facebook.com" },
				{ method: 'POST', link: "www.facebook.com" },
				{ method: 'GET', link: "www.facebook.com" },
			]
		}
	],
	headers: {}
}

const rootReducer = (state = initState, action) => {
	switch (action.type) {
		case GETRequest:
			// console.log('action dispatch', action.payload);
			return Object.assign({}, state, {
				data: action.payload
			})

		case GETBodyData:
			// console.log("Body data --", action.payload);
			return Object.assign({}, state, {
				bodyData: action.payload
			})

		case SETParamKey:
			// console.log("Param Key --", action.payload);
			return Object.assign({}, state, {
				paramKey: action.payload
			})

		case SETHistoryList:
			// console.log("History --", action.payload);
			// return 
			const history = [...state.historyList[0].history, ...action.payload.history]
			state.historyList.history = history
			// console.log("History ----- ", state.historyList.history);
			// return Object.assign({}, state, {
				
			// })

		case SETHeadersPayload:
			console.log("Headers--", action.payload);
			const headers_result = { ...state.headers }
			// console.log("headers_result", headers_result);
			return Object.assign({}, state, {
				headers: { ...headers_result, ...action.payload }
			})

		default:
			return state;
	}
	return state;
}

export default rootReducer