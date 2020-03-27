# Select2 Generator From Json

![alt text](http://code.mustafacagri.com/select2generator/ss/ss-min.png "Select2 Generator From Json")

## What's Happening Here?

` Id Attribute ` It's the your select's Id attribute as usual, nothing is different. ***Example: testId***

` Name Attribute ` It's the your select's name attribute as usual, nothing is different. ***Example: testName***

` Multiple Attribute`  You can leave it blank or type multiple there. If you leave it blank, it will be a single select. And if you write multiple or anything like 1 or asd or etc, it will be multiple selectable select. Example: multiple

` Data-MaximumSelectionLength ` Attribute For multiple select2s, you can set a value for maximum. ***Example: 1***

` Data-MaximumSelectedText ` Attribute What will be writen if max selection length is top out? args.maximum is a variable, which select2generator will replace it a number with maximumSelectionLength. ***Example: You can only select args.maximum item***

` Data-Url Attribute *[REQUIRED]* ` Here is an one of the important attribute. There URL what you write here is will be come to your select2 dropdown with a JSON format. Be aware that this URL must has a JSON file and it must has at least 2 property in it. ***Example: https://select2generator.firebaseio.com/people.json***

` Data-Text Attribute ` Which object property should be your text in your select2 dropdown? If Select2 Generator can not find this property, it will be shown first property from JSON file which is writen in Data-Url attribute. ***Example: name***

` Data-Value Attribute ` Which object property should be your value area in your select2 dropdown? If Select2 Generator can not find this property, it will be shown second property from JSON file which is writen in Data-Url attribute. ***Example: id***

## Small Break!
Let's talk a bit what we have till now. Your URL must have a valid JSON file. That's the first point. Then, if you leave data-text or data-value, the data will be come from first two properties in your JSON file. Besides, if there is a typo or mistake, it will be same as the previous one.

In this way, if this happens and your JSON file like this

```
{
  ["id":1, "name":"Mustafa", "city":"Ankara"],
  ["id":2, "name":"Çaðrý", "city":"Balýkesir"],
  ["id":3, "name":"Güven", "city":"Ýstanbul"]
}
```

Your select2 will be like this:
```
<select class="select2Generator">
  <option value="1">Mustafa</option>
  <option value="2">Çaðrý</option>
  <option value="3">Güven</option>
</select>
```


` Data-Placeholder Attribute ` It's an ordinary placeholder for your select2 dropdown. Example: My First Select2 Generator Example
Data-Language Attribute Do you prefer to be shown in your local language. You might type it. Hoewever you should download or include the languages js files. ***Example: tr-TR***

` Data-NoDataFound Attribute ` What will be shown if there is no data in your JSON file? By the way, you can change the default no data message in top of the select2Generator.js file. ***Example: I could not find any data :(***

` Data-DefaultOptionText Attribute ` It's a default option at top of the options. ***Example: Please choose an option***

` Data-AllowClear Attribute ` Clearable Selection. Default is false. Two options: True or False. If you do not type anything or do not defined is false. ***Example: True***

## Data Attributes For Ajax Search
` Data-AjaxSearch Attribute ` You have 2 options for this attributes. True or False. Default value is false. If you type True, there will be an ajax search select2. However "data-minimumInputLength", "data-maximumInputLength", "data-inputTooLongText", "data-inputTooShortText" attributes are involved with Ajax Search and you can use these attributes for Ajax Search too. ***Example: True***

` Data-MinimumInputLength Attribute ` When will start to search after character lentgh is reached. Default value is 3 ***Example: 1***

` Data-MaximumInputLength Attribute ` After reached the maximum length of input, the search will not be work. Default value is "0" (infinite) ***Example: 5***

` Data-InputTooShortText Attribute ` What will be shown before reach the minimum character length of input. args.minimum is a variable, which select2generator will replace it a number ***Example: You should at least args.minimum character to search***

` Data-InputTooLongText Attribute ` What will be shown, after reached the maximum length of input. args.maximum is a variable, which select2generator will replace it a number ***Example: You can type maximum args.maximum characters***

## Data Attributes For Option Groups (optgroup)

` Data-OptGroup Attribute ` You have 2 options for this attributes. True or False. Default value is false. If you type True, there will be an option group. Your Data-Url is important here because it will be like that: https://select2generator.firebaseio.com/optiongroup.json ***Example: True***

` Data-OptGroupTitle Attribute ` in our example (https://select2generator.firebaseio.com/optiongroup.json) baslik is our option group title. ***Example: Baslik***

Data-OptGroupTitle Attribute ` In our example data is our option group's data source. By the way, you should type above data-name="name" and data-value="id" in this example. ***Example: Data***

## Data Attributes For Cascade / Second Select2 Dropdown

` Data-TargetSelectId Attribute ` What will be your second / target select2 dropdown's Id? ***Example: exampleId***

` Data-TargetSelectUrl Attribute ` Where do you want to go from first select2 to second select2 dropdown? ***Example: https://select2generator.firebaseio.com/people2.json***

` Data-TargetSelectParam Attribute ` How do you want to pass your selected value? If you make it "Id", you will reach this URL: https://select2generator.firebaseio.com/people2.json?id=[YourSelectedOptionsValue] ***Example: Id***

` Data-TargetSelectType Attribute ` Get or Post? ***Example: Get***
` Data-TargetSelectText Attribute ` Same as data-text attribute ***Example: Value***
` Data-TargetSelectValue Attribute ` Same as data-value attribute ***Example: Id***
