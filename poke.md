//（i,j）
//  压住他的元素在时不可点击
//（i+1，j）（i+1，j+1）
取到当前元素的id定义解构为数组
定义遮挡id的元素id1，id2，并判断其存在性，注意获取到的元素是否为字符，可通过i+1来变为数字或者（Number（i）转化为数字），parseInt转换字符串
因jQuery获取的都是对象，所以选择length做判断

判断是否选中状态
if（）添加一个类来判断是否点击过

判断牌值定义first存值
first等于当前${this}
通过判断first是否有值来判断点击了第几次
jQuery中data缓存数据（number）
通过number1,2来判断和0是否等于14，是则delete，否则重置。

if



