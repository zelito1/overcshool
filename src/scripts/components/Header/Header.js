import React, {Component} from 'react'

export default class Header extends Component {
  render() {
    return (
      <div className="all">
		<div className="header">
			<div className="tx">
				<img src="images/touxiang.jpg" alt="" />
			</div>
			<h1>张鑫亮</h1>
			<p>如果天上真的掉馅饼了，也砸不到你</p>
		</div>
		<div className="nr">
			<div className="left">
				<ul>
					<li>个人信息</li>
					<li>教育经历</li>
					<li>项目经历</li>
					<li>技术能力</li>
					<li>自我评价</li>
				</ul>
			</div>
			<div className="right">
				<ul>
					<li>
						<h2>个人信息</h2>
						<div>线</div>
						<div>内容</div>
					</li>
					
				</ul>
			</div>
		</div>
      </div>
    )
  }
}