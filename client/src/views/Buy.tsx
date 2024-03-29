// import { Button, Card, Col, Row } from 'antd';
// import { count } from 'console';
// import { BADQUERY } from 'dns';
// import React from 'react';
// import "../css/buy.css"

// const jsonData = [
// 	{
// 		"title": "Europe Street beat",
// 		"description": "www.instagram.com",
// 		"imageSrc": "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
// 	},
// 	{
// 		"title": "Nature Beauty",
// 		"description": "Enjoy the beauty of nature",
// 		"imageSrc": "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
// 	},
// 	{
// 		"title": "City Skyline",
// 		"description": "Explore the city skyline",
// 		"imageSrc": "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
// 	}
// ];
// const buy = () => {
// 	console.log("购买的逻辑")
// }
// const { Meta } = Card;
// const View: React.FC = () => (
// 	<>
// 		<h1>购买页面</h1>
// 		<div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))', gap: '8px' }}>
// 			{/* <div style={{ width: "100%", columnCount: 5, columnGap: "30px" }}> */}
// 			{jsonData.map((card, index) => (
// 				<>
// 					<Card
// 						key={index}
// 						hoverable
// 						style={{ width: '100%' }}
// 						cover={<img alt={card.title} src={card.imageSrc} />}
// 						onClick={buy}
// 					>
// 						<Meta title={card.title} description={card.description} />
// 					</Card>
// 					<Button
// 						onClick={buy}>
// 						购买
// 					</Button>
// 				</>
// 			))}
// 		</div>

// 	</>
// );

// export default View;

import { useEffect, useState } from "react";
import Waterfall, { TOptions } from "charge-waterfall";

function App() {
	const [isLoading, setIsLoading] = useState(false);

	// 休眠的时间
	const sleep = (wait = 1000) => {
		return new Promise((resolve) => {
			setTimeout(resolve, wait);
		});
	};


	useEffect(() => {
		const waterfall = new Waterfall({
			container: ".container",
			initialData: [
				{
					src:
						"https://www.caoyang2002.top/usr/uploads/2023/08/4079902677.jpg",
				}, {
					src:
						"https://www.caoyang2002.top/usr/uploads/2023/08/4079902677.jpg",
				}, {
					src:
						"https://www.caoyang2002.top/usr/uploads/2023/08/4079902677.jpg",
				}, {
					src:
						"https://www.caoyang2002.top/usr/uploads/2023/08/4079902677.jpg",
				}, {
					src:
						"https://www.caoyang2002.top/usr/uploads/2023/08/4079902677.jpg",
				}, {
					src:
						"https://www.caoyang2002.top/usr/uploads/2023/08/4079902677.jpg",
				}, {
					src:
						"https://www.caoyang2002.top/usr/uploads/2023/08/4079902677.jpg",
				}, {
					src:
						"https://www.caoyang2002.top/usr/uploads/2023/08/4079902677.jpg",
				}, {
					src:
						"https://www.caoyang2002.top/usr/uploads/2023/08/4079902677.jpg",
				}, {
					src:
						"https://www.caoyang2002.top/usr/uploads/2023/08/4079902677.jpg",
				}, {
					src:
						"https://www.caoyang2002.top/usr/uploads/2023/08/4079902677.jpg",
				}, {
					src:
						"https://www.caoyang2002.top/usr/uploads/2023/08/4079902677.jpg",
				}, {
					src:
						"https://www.caoyang2002.top/usr/uploads/2023/08/4079902677.jpg",
				}, {
					src:
						"https://www.caoyang2002.top/usr/uploads/2023/08/4079902677.jpg",
				}, {
					src:
						"https://www.caoyang2002.top/usr/uploads/2023/08/4079902677.jpg",
				}, {
					src:
						"https://www.caoyang2002.top/usr/uploads/2023/08/4079902677.jpg",
				}, {
					src:
						"https://www.caoyang2002.top/usr/uploads/2023/08/4079902677.jpg",
				}, {
					src:
						"https://www.caoyang2002.top/usr/uploads/2023/08/4079902677.jpg",
				}, {
					src:
						"https://www.caoyang2002.top/usr/uploads/2023/08/4079902677.jpg",
				},

			],
			resizable: true,
			bottomDistance: 200,
			column: 4,
			gapX: 10, //元素水平见的距离
			gapY: 10,
			width: 160, //容器宽度
			defaultImgUrl:
				"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Ffbf18a5314f750da671711dfb176cf8791fbc687153d-g7YSBF_fw658&refer=http%3A%2F%2Fhbimg.b0.upaiyun.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1636300149&t=84cd1f7a4fe131edd66638bd44f3496d",
			render: () => `<div>价格: 10 APT</div>`,
			onClick: (data: any, event: any) => {
				console.log(data, event);
			},


		});

		// 这里的_isLoading是防止触底重复多次请求的
		let _isLoading = false;
		waterfall.onReachBottom(async () => {
			if (_isLoading) return;
			_isLoading = true;
			console.log("触底");
			// 这里的setIsLoading是用来做Loading状态渲染的
			setIsLoading(true);
			// 模拟一个异步请求，拿到异步请求的数据之后塞进loadMore里面
			await sleep(2000);
			setIsLoading(false);
			// 异步请求拿到数据之后就可以通过loadMore方法插入了
			waterfall.loadMore([
				{
					// src: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Flmg.jj20.com%2Fup%2Fallimg%2F1114%2F041621124255%2F210416124255-1-1200.jpg&refer=http%3A%2F%2Flmg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1666668021&t=38137d81528162e28293c8a64d5caa56",
					src: "https://www.caoyang2002.top/usr/uploads/2023/08/4079902677.jpg",
					data: {
						name: `${Math.floor(Math.random() * 100)}`,
					},
				},
				{
					// src: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic.jj20.com%2Fup%2Fallimg%2Fmn02%2F1231201I024%2F2012311I024-4.jpg&refer=http%3A%2F%2Fpic.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1666668021&t=71b04264cbf60717c407550a0db1fef0",
					src: "https://www.caoyang2002.top/usr/uploads/2023/08/4079902677.jpg",
					data: {
						name: `${Math.floor(Math.random() * 100)}`,
					},
				},
			]);
			_isLoading = false;
		});

		return () => {
			waterfall.destroy();
		};
	}, []);

	return (
		<>
			<div className="container" style={{ width: "1000px" }}></div>
			{isLoading && (
				<div
					style={{
						padding: "20px",
						textAlign: "center",
					}}
				>
					加载更多中...
				</div>
			)}
		</>
	);
}

export default App;