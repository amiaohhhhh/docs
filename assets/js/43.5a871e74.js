(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{367:function(s,n,t){"use strict";t.r(n);var e=t(3),a=Object(e.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('<table class="sf_table" cellspacing="0" cellpadding="0" v-for="(item,i) in checkList" :key="i" >\n  <tr>\n    <td>收信名</td>\n    <td colspan="3">\n    <p>{{item.CustomerName}}</p>\n    </td>\n  </tr>\n\t<tr>\n\t\t<td>短信签名</td>\n\t\t<td colspan="3">\n      <el-select v-model="item.smsValue" placeholder="请选择" @change="selectChange(item)">\n        <el-option\n        v-for="(smsItem,i) in options"\n        :key="i"\n        :label="smsItem"\n        :value="smsItem">\n        </el-option>\n      </el-select>\n\t\t</td>\n\t</tr>\n  <tr>\n    <td>短信内容</td>\n    <td colspan="3">\n    \t<el-input placeholder="请输入短信内容" type="textarea" autosize :row="3" v-model="item.newValue"></el-input>\n    </td>\n  </tr>\n</table>\nhandleSelectionChange(item){\n  let json = JSON.parse(JSON.stringify(item))\n  json.forEach(v=>{\n  v.newValue = `尊敬的${v.CustomerName}：您好！上次购买的藏药服用感觉如何？怕电话打扰到您，有问题可随时咨询药师。扎西德勒！`\n  v.smsValue = this.options[0]\n  })\n  this.checkList=json\n},\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br")])]),n("p",[s._v("就是引用内存的问题啊，你的数据是在外部列表取的值，checklist引用的就是外部的列表，改变里面的数据会改变外面的数据，因此需要进行深层拷贝"),n("br"),s._v("这个jsonparse  stringify就是一个简单的深层拷贝的。大部分时候都够用了")])])}),[],!1,null,null,null);n.default=a.exports}}]);