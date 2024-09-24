// 开源项目，未经作者同意，不得以抄袭/复制代码/修改源代码版权信息。
import { isSelfDevelop } from 'src/utils/util'

const zhCN: Record<string, any> = {
  _loading: '加载中...',
  _webTitle: '发现导航',
  _uncategorized: '未分类',
  _modifySuccess: '修改成功！',
  _copySuccess: '复制成功',
  _copyUrl: '复制链接',
  _shareWeb: '分享网站',
  _edit: '编辑',
  _sort: '排序',
  _refresh: '刷新',
  _add: '新增',
  _del: '删除',
  _apply: '申请收录',
  _batchDel: '批量删除',
  _confirmDel: '您确定要删除吗？',
  _default: '综合',
  _title: '标题',
  _defaultTitle: '默认网站标题',
  _desc: '描述',
  _link: '链接',
  _current: '当前',
  _empty: '对不起，没有找到您想要的结果~',
  _goBack: '返回上一层',
  _viewInfo: '查看信息',
  _syncData: '同步数据',
  _addData: '新增数据',
  _collapse: '展开',
  _put: '折叠',
  _closeDark: '关闭暗黑',
  _openDark: '开启暗黑',
  _switchTo: '切换到',
  _infoTip: '以下信息只有您能查看，请放心！',
  _know: '知道了',
  _devBranch: '部署分支',
  _curVer: '当前版本',
  _newVer: '最新版本',
  _prevDevTime: '上次构建时间',
  _unknow: '未知',
  _repeatOper: '请不要频繁操作',
  _syncDataOut: isSelfDevelop ? '确定同步吗？' : '同步数据到远端',
  _confirmSync: '确定同步',
  _confirmSyncTip: isSelfDevelop
    ? ''
    : '确定将所有数据同步到远端吗？（每次保存需要等待构建完成再进行下一次操作）',
  _syncSuccessTip: isSelfDevelop
    ? '同步成功'
    : '同步成功, 大约需要5分钟构建时间',
  _error: '错误',
  _syncFailTip: '同步失败, 请重试',
  _inputToken: '请输入TOKEN',
  _inputTokenMsg: isSelfDevelop
    ? '请输入密码'
    : '请在下方输入您的TOKEN进行登录校验',
  _getToken: '不知道Token如何获取？',
  _readDoc: '请先阅读我们的指南',
  _authLogin: '请授权登录',
  _pleaseInputToken: '请填写正确的Token',
  _tokenVerSuc: '授权成功!',
  _tokenVerFail: 'Token 验证失败',
  _repeatAdd: '请不要重复添加',
  _addSuccess: '新增成功!',
  _delSuccess: '删除成功!',
  _saveSuccess: '保存成功!',
  _errorBookTip: '错误: 书签解析失败',
  _importSuccess: '导入成功！',
  _acceptPng: '仅支持 PNG 格式',
  _updateLogoSuccess: '更换成功, 由于CDN缓存问题需要次日更新',
  _updateLogoFail: '更换LOGO失败，请重试！',
  _resetInitData: '撤销本次所有操作',
  _confirmReset: '确定重置',
  _warnReset: '当前所有操作将还原到上次构建状态',
  _resetSuccess: '数据已重置回初始状态',
  _sel3: '请选择三级分类',
  _sel2: '请选择二级分类',
  _sel1: '请选择一级分类',
  _reserveOne: '至少保留一项，请先添加!',
  _icon: '图标',
  _backHome: '返回主页',
  _syncRemote: '同步到远端',
  _uploading: '上传中...',
  _addTag: '添加分类',
  _addWeb: '添加网站',
  _clickEdit: '点击编辑',
  _allContentMsg1: '1、所有数据设置完毕后点击 “同步到远端”，拖拽表格进行排序',
  _allContentMsg2: '2、网站分类需手动维护,',
  _updateLogo: '更换LOGO',
  _tagName: '标签名称',
  _onlyOwnVisible: '自己可见',
  _createAt: '创建时间',
  _action: '操作',
  _delWarn: '这会删除分类下的所有数据，您确定要删除吗?',
  _mgr1: '管理一级分类',
  _mgr2: '管理二级分类',
  _mgr3: '管理三级分类',
  _mgrWeb: '管理网站',
  _webName: '网站名称',
  _webTag: '网站分类',
  _webDesc: '网站描述',
  _webLink: '网站链接',
  _requiredName: '请输入名称',
  _requiredLink: '请输入网站链接',
  _uploadSuccess: '上传成功',
  _uploadFail: '上传失败，请重试！',
  _notUpload: '请不要上传非法图片',
  _shortcut: '快捷方式',
  _score: '评分系数',
  _iconAddr: '图标地址',
  _copyUpload: '支持将截图或复制图片粘贴此处上传',
  _upload: '上传',
  _continueAdd: '继续添加关联链接或标签',
  _moveTo: '移动到',
  _move: '移动',
  _copy: '复制',
  _moveSuccess: '移动成功',
  _save: '保 存',
  _color: '颜色',
  _remark: '描述/备注',
  _about: '关于本站',
  _webInfo: '网站信息',
  _systemSet: '系统设置',
  _searchEngines: '搜索引擎',
  _userCollect: '用户收录',
  _bookmarkImport: '书签导入',
  _bookmarkExport: '书签导出',
  _vipAuth: '绑定域名',
  _tagSettings: '标签设置',
  _websiteMang: '网站管理',
  _addRow: '新增一条',
  _bookImportTip: `<p>支持大部分主流浏览器，若导入失败表示暂不支持</p><p>自动检测满足三级分类导航，其他一律设为未分类</p>`,
  _engineName: '引擎名称',
  _status: '状态',
  _isDisable: '是否禁用',
  _webLogo: '网站LOGO',
  _defLanguage: '默认语言',
  _pageLoad: '页面Loading',
  _random: '随机',
  _noSet: '不设置',
  _showGithub: '显示Github',
  _defTheme: '默认主题',
  _appTheme: 'App主题',
  _keywords: '网站关键字',
  _footHtml: '底部HTML',
  _headHtml: '头部HTML',
  _showWeather: '显示天气',
  _weatherTip: '目前只支持 "Shortcut" 主题',
  _theme: '主题',
  _backgroundImage: '图片',
  _engineUrl: '引擎地址',
  _actionSuccess: '操作成功',
  _jumpAddr: '跳转地址',
  _backup: '下载备份',
  _bannerHeight: 'Banner高度',
  _autoPlay: '自动轮播',
  _importBackup: '导入备份',
  _importBackupTip: '导入后会将当前所有网站数据清空并导入',
  _showLanguage: '显示切换语言',
  _showRate: '显示卡片评分',
  _showCopy: '显示卡片复制',
  _showShare: '显示卡片分享',
  _angleMark: '角标设置',
  _logout: '登出账号',
  _cardStyle: '卡片风格',
  _tagPlaceholder: '可以为空当作一个普通标签',
  _dragSort: '拖动可排序',
  _checkWeb:
    '上次检测出 {count} 个网站链接失效，具体到管理网站查看，如需再次检测状态直接点保存触发事件即可。',
  _buildTip: '修改完请保存并等待构建完成，离开无效',
  _enableSEO: '开启SEO(加载稍慢)',
  _allowCollect: '允许用户提交收录',
  _collectMenuView: `具体到用户收录菜单查看`,
  _displaySwitchTheme: '显示切换主题',
  _requestAddress: '请求地址',
  _requestTip: '当点击保存按钮时会发出GET请求填写的地址',
  _followPage: '跟随页面',
  _bannerTip: '当高度为0时，图片宽高会自适应，务必保证每张图片尺寸一致',
  _checkStatus: '检查网站链接状态(上述任一项更新，建议此开启，耗时相同)',
  _standard: '标准',
  _column: '栏目',
  _simplicity: '简约',
  _original: '原始',
  _navOver: '一级导航超出显示',
  _scrollBar: '滚动条',
  _ellipsis: '三点式',
  _sidebarImg: '侧栏图片板块',
  _sidebarTitle: '侧栏标题',
  _defTitle4: '默认网站标题, 建议4字以内',
  _inputAuthCode: '请输入授权码',
  _waitHandle: '提交成功，等待站长处理',
  _collect: '收录',
  _confirmCollect: '您确定要收录吗？',
  _pendingGet: '正在获取...',
  _logoutAuthCode: '退出',
  _spiderRule: '爬取规则',
  _spiderTitle: '更新标题',
  _spiderIcon: '更新图标',
  _spiderDesc: '更新描述',
  _notSpider: '不更新',
  _spiderAlways: '总是更新',
  _spiderEmpty: '为空时更新',
  _spiderStatus: '爬取状态',
  _spiderTip:
    '每次保存时会触发爬取规则，影响构建速度，在必要时进行爬取更新信息',
  _spiderQty: '并发数量',
  _spiderQtyTip: '',
  _spiderNetTip: '由于网络因素，部分网站可能无法访问直接跳过，仅供参考',
  _spiderBuildTip:
    '构建完成后对数据无误，请到网站管理点击一次保存，否则数据不会永久存储',
  _associatedLabels: '关联标签',
  _menuCollapse: '菜单默认收起',
  _retro: '复古',
  _accessTimeout: '爬取超时(秒)',
  _accessTimeoutTip: '爬取网站指定秒数无响应跳过，数字越大成功率越高，但是越慢',
  _imageCDN: '图片CDN',
  _docTitle: '文档标题',
  _importEnter: `在浏览器输入 <a href="chrome://bookmarks/" target="_blank">chrome://bookmarks/</a> 找到导出书签，导出 HTML 文件点击下面导入`,
  _buildSuccess: '构建成功',
  _bindDomain:
    '绑定域名，多个以逗号分隔，不要带协议如：example.com,xjh22222228.github.io',
  _clickExport: '点我导出',
  _exportIcons: '同时导出网站图标，耗时较久',
  _errorIcons: '以下图标无法被正常处理：',
  _processing: '正在处理',
  _weeks: [
    '星期日',
    '星期一',
    '星期二',
    '星期三',
    '星期四',
    '星期五',
    '星期六',
  ],
  _shortMonth: '月',
  _shortDay: '日',
  _classNoMatch: '分类不匹配，采用默认第一个分类',
  _openSearch: '输入链接允许查找',
  _moveUp: '上移',
  _moveDown: '下移',
  _footTemplate: '模版',
  _footTemplateDesc:
    '所有底部HTML通用,将获取的模版代码拷贝到需要设置的主题或全局，现有变量：${total} = 网站数量； ${hostname} = 域名；${year} = 今年年份；class="applyweb" = 申请收录',
  _builtTailwind:
    '系统已内置 <a href="https://play.tailwindcss.com" target="_blank">https://play.tailwindcss.com</a>，您无需书写样式',
  _quick: '快捷',
  _components: '小组件',
  _calendar: '日历',
  _submit: '提交',
  _cancel: '取消',
  _calendarTopColor: '顶部背景色',
  _calendarBgColor: '背景色',
  _runtime: '运行时长',
  _runtimeTitle: '标题',
  _offWork: '下班',
  _workTitle: '工作标题',
  _restTitle: '休息标题',
  _image: '图片',
  _text: '文本',
}

export default zhCN
