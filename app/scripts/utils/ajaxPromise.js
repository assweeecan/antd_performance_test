import $ from 'jquery';

export default (...param)=> {
  let option = {};
  if (param[0] && typeof (param[0]) == "string") {
    option.url = param[0];
  } else if (typeof(param[0]) == "object") {
    option = {...option, ...param[1]};
  }
  if (typeof(param[1]) == "object") {
    option = {...option, ...param[1]};
  }

  return new Promise((resolve, reject)=> {
    $.ajax({
      url: "",
      type: "GET",
      dataType: "json",
      success: (data)=> resolve(data),
      error: (data)=> reject(data),
      ...option,
    });
  });
}