
#each of these element will be called property, and can be ary

export default {
    template: null,  
    suggestType: null,
    suggestNickName: null,
    dictionary: [],
    defaultStep: null,
    triggers: [],
    teapots: [],
    authority: 0,
    vars: [],
    neededLinks: [],
    neededUsers: [],
    procedures: [],
};




Scenario: 用户创建新的Atthis模板
       Given 空白模板的例子JSON feature/empty.js
       Then 用户可以更改任何模板的字段，对与模板中的Array字段，用户可以编辑Array中的任意元素，也可以删除，扩展Array

   Scenario: 用户选择编辑已有的Atthis模板
       Given 创建好的模板，模板的格式和feature/test.js相同
       Then 用户可以更改任何模板的字段，对与模板中的Array字段，用户可以编辑Array中的任意元素，也可以删除，扩展Array


       export default {
           template: 'testTemplate',
           suggestType: 'BUYING',
           suggestNickName: 'BUYING',
           dictionary: ['buying'],
           defaultStep: '1',
           triggers: [{
               step: '1',
               amounts: 1,
           }],
           teapots: [{
               name: 'atthis_description',
               value: 'atthis_description',
           }],
           authority: 0,
           vars: [{
                   name: 'sc',
                   type: 'String',
                   defaultValue: 'ss',
               },
               {
                   name: 'sb',
                   type: 'String',
                   defaultValue: 'qqq',
               },
           ],
           neededLinks: [{
               type: 'car',
               name: 'mainCar',
               selfType: 'SELF',
               self: [{
                   name: 'vin',
                   type: 'string',
               }, {
                   name: 'color',
                   type: 'string',
               }],
           }, {
               type: 'car',
               name: 'secondCar',
               selfType: 'BOTH',
               self: [{
                   name: 'vin',
                   type: 'string',
               }, {
                   name: 'color',
                   type: 'string',
               }],
           }],
           neededUsers: [{
               role: 'killer',
           }],
           procedures: [{
               step: '1',
               nickName: 'FIRST STEP',
               isActive: true,
               role: 'killer',
               gather: [{
                   name: 'rb',
                   type: 'String',
                   action: 'SET|sc|$',
               }, {
                   name: 'tc',
                   type: 'String',
                   action: 'SET|sb|$',
               }],
               deliver: [{
                   from: 'LINK|mainCar|ALL',
               }, {
                   option: ['RENAME|sss'],
                   from: 'VAR|sb',
               }, {
                   option: ['RENAME|SSADASDA', 'DESCRIPTION|SSADASDA'],
                   from: 'VAR|sc',
               }],
               next: [{
                   switch: 'VAR|sb|EQUAL|fff',
                   next: ['2'],
               }, {
                   switch: 'ALL',
                   next: ['2 wired'],
               }],
           }, {
               step: '2',
               nickName: 'SECOND STEP',
               isActive: true,
               role: 'killer',
               description: 'hahaha',
               gather: [{
                   name: 'rb',
                   type: 'String',
                   action: 'SET|sc|$',
               }, {
                   name: 'tc',
                   type: 'String',
                   action: 'SET|sb|$',
               }],
               deliver: [{
                   from: 'LINK|mainCar|ALL',
               }, {
                   option: ['RENAME|sss'],
                   from: 'VAR|sb',
               }, {
                   option: ['RENAME|SSADASDA', 'DESCRIPTION|SSADASDA'],
                   from: 'VAR|sc',
               }],
               next: [{
                   switch: 'ALL',
                   next: ['$RELAY', '$COMPLETE'],
                   detail: ['TEMPLATE|testTemplate', 'TYPE|buting', 'NICK|BUYINGE', 'CREATEDBY|$current', 'TRIGGER|1|VAR|sc', 'LINK|car|mainCar|LINK|mainCar', 'LINK|car|secondCar|LINK|secondCar', 'USER|killer|USER|killer'],
               }],
           }, {
               step: '2 wired',
               nickName: 'SEOND WIRED STEP',
               isActive: true,
               role: 'killer',
               gather: [{
                   name: 'rb',
                   type: 'String',
                   action: 'SET|sc|$',
               }, {
                   name: 'tc',
                   type: 'String',
                   action: 'SET|sb|$',
               }],
               deliver: [{
                   from: 'LINK|mainCar|ALL',
               }, {
                   option: ['RENAME|sss'],
                   from: 'VAR|sb',
               }, {
                   option: ['RENAME|SSADASDA', 'DESCRIPTION|SSADASDA'],
                   from: 'VAR|sc',
               }],
               next: [{
                   switch: 'ALL',
                   next: ['$COMPLETE'],
               }],
           }],
       };
