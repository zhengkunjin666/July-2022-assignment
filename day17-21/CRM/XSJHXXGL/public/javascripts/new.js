const PAGE={init:function(){this.bind()},bind:function(){window.addEventListener("load",this.highlight);let e=document.getElementById("new-submit"),t=(e.addEventListener("click",this.handlerInsert),document.getElementById("new-phone"));t.addEventListener("focus",this.errorText)},highlight:function(){let t=window.location.href,n=document.getElementsByClassName("nav-item");for(let e=0;e<n.length;e++){var i=n[e].dataset.id;-1!=t.indexOf(i)&&(n[e].className="nav-item active")}},handlerInsert:async function(){var e=document.getElementById("new-name").value.trim(),t=document.getElementById("new-phone").value.trim(),n=document.getElementById("new-password").value.trim(),i=document.getElementById("new-role").value.trim(),o=document.getElementById("csrf").value;if(e&&t&&n&&i)if(PAGE.isMobile(t)){e=await fetch("/admin/user",{method:"POST",body:JSON.stringify({name:e,phone:t,password:n,role:i,csrf:o}),headers:{"content-type":"application/json"}}).then(e=>e.json());200===e.code?confirm("新增成功，确定返回用户列表吗？")&&location.assign("/admin/user"):(alert("新增失败！"),console.log(e.data))}else{let e=document.getElementById("errorText");void(e.innerText="手机格式不正确")}else alert("缺少参数！")},isMobile:function(e){return/^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/.test(e)},errorText:function(){let e=document.getElementById("errorText");e.innerText=""}};PAGE.init();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ldy5qcyJdLCJuYW1lcyI6WyJQQUdFIiwiaW5pdCIsInRoaXMiLCJiaW5kIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImhpZ2hsaWdodCIsIm5ld1N1Ym1pdCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJuZXdQaG9uZSIsImhhbmRsZXJJbnNlcnQiLCJlcnJvclRleHQiLCJocmVmIiwibG9jYXRpb24iLCJuYXZJdGVtIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImxldCIsImkiLCJsZW5ndGgiLCJpZCIsImRhdGFzZXQiLCJjbGFzc05hbWUiLCJhc3luYyIsIm5hbWUiLCJ2YWx1ZSIsInRyaW0iLCJwYXNzd29yZCIsInBob25lIiwicm9sZSIsImFsZXJ0IiwiaXNNb2JpbGUiLCJJbnNlcnRGZXRjaCIsImZldGNoIiwiaW5uZXJUZXh0IiwiY3NyZiIsImhlYWRlcnMiLCJjb250ZW50LXR5cGUiLCJyZXNwb25zZSIsImpzb24iLCJjb25maXJtIiwiYXNzaWduIiwibG9nIiwibWVzc2FnZSIsInRlc3QiLCJ2YWwiXSwibWFwcGluZ3MiOiJBQUFBLE1BQU1BLEtBQUksQ0FDTkMsS0FBTSxXQUNGQyxLQUFBQyxRQUVKQSxLQUFNLFdBQ0ZDLE9BQU9DLGlCQUFpQixPQUFPSCxLQUFLSSxXQUNoQ0MsSUFBQUEsRUFBVUMsU0FBU0MsZUFBZSxjQUVsQ0MsR0FESkgsRUFBVUYsaUJBQWlCLFFBQVFILEtBQUtTLGVBQzNCSCxTQUFTQyxlQUFlLGNBQ3JDQyxFQUFTTCxpQkFBaUIsUUFBUUgsS0FBS1UsWUFFM0NOLFVBQVcsV0FDSE8sSUFBSUEsRUFBQ1QsT0FBT1UsU0FBU0QsS0FDckJFLEVBQVFQLFNBQVNRLHVCQUF1QixZQUM1QyxJQUFJQyxJQUFJQyxFQUFFLEVBQUVBLEVBQUVILEVBQVFJLE9BQU9ELElBQUksQ0FBN0JELElBQUtHLEVBQVRMLEVBQWNBLEdBQUFBLFFBQWRLLElBQ0ksR0FBT0wsRUFBQUEsUUFBV00sS0FFZE4sRUFBUUcsR0FBR0ksVUFBVSxxQkFFNUJYLGNBQUFZLGlCQW5CRU4sSUFBQU8sRUFBQWhCLFNBQUFDLGVBQUEsWUFBQWdCLE1BQUFDLE9BcUJQZixFQUFlSCxTQUFBQyxlQUFnQixhQUFBZ0IsTUFBQUMsT0FDbkJDLEVBQUNuQixTQUFTQyxlQUFlLGdCQUF4QmdCLE1BQVRDLE9BQ0lFLEVBQU1wQixTQUFTQyxlQUFlLFlBQWFnQixNQUFNQyxPQUNqREMsRUFBUW5CLFNBQUNBLGVBQVNDLFFBQWVnQixNQUNqQ0ksR0FBSUwsR0FBQ2hCLEdBQVNDLEdBQWVvQixFQUc3QkMsR0FBTTlCLEtBQUErQixTQUFOSCxHQUFBRSxDQVFBRSxRQUFrQkMsTUFBTSxjQUFjLENBTHRDakMsT0FBSytCLE9BQ0RuQixLQUFBQSxLQUFVSixVQUFTQyxDQUNieUIsS0FBQUEsRUFDVk4sTUFBQUEsRUFDSEQsU0FBQUEsRUFPT0UsS0FBTUEsRUFQYk0sS0FBQUEsSUFFU0MsUUFEZ0MsQ0FFNUJDLGVBQVcsc0JBRWpCVCxLQUFPQSxHQUZVVSxFQUFBQyxRQUFBLE1BR2pCWixFQUFVQSxLQUhPYSxRQUFBLG9CQUZpQjFCLFNBQUEyQixPQUFBLGdCQVM5QlgsTUFBQSxTQUdKUSxRQUFRSSxJQUFJSixFQUFTQyxXQXBCekIsQ0FDQXRCLElBQUFMLEVBQUFKLFNBQUFDLGVBQUEsa0JBQ0hHLEVBQUFzQixVQUFBLGdCQUpPSixNQUFDdEIsVUFpQ2J1QixTQVRZWSxTQUFRSCxHQVVoQixNQUFPLCtFQUErRUksS0FBS0MsSUFFL0ZqQyxVQVZZRSxXQUNIRyxJQUFBTCxFQUFBSixTQUFBQyxlQUFBLGFBSkxHLEVBS0tzQixVQUFBLEtBYWJsQyxLQVZTQyIsImZpbGUiOiJuZXcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBQQUdFPXtcclxuICAgIGluaXQ6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdGhpcy5iaW5kKCk7XHJcbiAgICB9LFxyXG4gICAgYmluZDogZnVuY3Rpb24oKXtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsdGhpcy5oaWdobGlnaHQpO1xyXG4gICAgICAgIGxldCBuZXdTdWJtaXQ9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ldy1zdWJtaXQnKTtcclxuICAgICAgICBuZXdTdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLHRoaXMuaGFuZGxlckluc2VydCk7XHJcbiAgICAgICAgbGV0IG5ld1Bob25lPWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXctcGhvbmUnKTtcclxuICAgICAgICBuZXdQaG9uZS5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsdGhpcy5lcnJvclRleHQpO1xyXG4gICAgfSxcclxuICAgIGhpZ2hsaWdodDogZnVuY3Rpb24oKXtcclxuICAgICAgICBsZXQgaHJlZj13aW5kb3cubG9jYXRpb24uaHJlZjtcclxuICAgICAgICBsZXQgbmF2SXRlbT1kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCduYXYtaXRlbScpO1xyXG4gICAgICAgIGZvcihsZXQgaT0wO2k8bmF2SXRlbS5sZW5ndGg7aSsrKXtcclxuICAgICAgICAgICAgbGV0IGlkPW5hdkl0ZW1baV0uZGF0YXNldC5pZDtcclxuICAgICAgICAgICAgaWYoaHJlZi5pbmRleE9mKGlkKSAhPSAtMSl7XHJcbiAgICAgICAgICAgICAgICBuYXZJdGVtW2ldLmNsYXNzTmFtZT1cIm5hdi1pdGVtIGFjdGl2ZVwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGhhbmRsZXJJbnNlcnQ6IGFzeW5jIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgbGV0IG5hbWU9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ldy1uYW1lJykudmFsdWUudHJpbSgpO1xyXG4gICAgICAgIGxldCBwaG9uZT1kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3LXBob25lJykudmFsdWUudHJpbSgpO1xyXG4gICAgICAgIGxldCBwYXNzd29yZD1kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3LXBhc3N3b3JkJykudmFsdWUudHJpbSgpO1xyXG4gICAgICAgIGxldCByb2xlPWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXctcm9sZScpLnZhbHVlLnRyaW0oKTtcclxuICAgICAgICBsZXQgY3NyZj1kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3NyZicpLnZhbHVlO1xyXG4gICAgICAgIGlmKCFuYW1lIHx8ICFwaG9uZSB8fCAhcGFzc3dvcmQgfHwgIXJvbGUpe1xyXG4gICAgICAgICAgICBhbGVydChcIue8uuWwkeWPguaVsO+8gVwiKVxyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmKCFQQUdFLmlzTW9iaWxlKHBob25lKSl7XHJcbiAgICAgICAgICAgIGxldCBlcnJvclRleHQ9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Vycm9yVGV4dCcpO1xyXG4gICAgICAgICAgICBlcnJvclRleHQuaW5uZXJUZXh0PVwi5omL5py65qC85byP5LiN5q2j56GuXCI7XHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH07XHJcbiAgICAgICAgbGV0IEluc2VydEZldGNoPWF3YWl0IGZldGNoKCcvYWRtaW4vdXNlcicse1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICAgICAgbmFtZTogbmFtZSxcclxuICAgICAgICAgICAgICAgIHBob25lOiBwaG9uZSxcclxuICAgICAgICAgICAgICAgIHBhc3N3b3JkOiBwYXNzd29yZCxcclxuICAgICAgICAgICAgICAgIHJvbGU6IHJvbGUsXHJcbiAgICAgICAgICAgICAgICBjc3JmOiBjc3JmLFxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgaGVhZGVyczp7XHJcbiAgICAgICAgICAgICAgICAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KS50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICBpZihJbnNlcnRGZXRjaC5jb2RlPT09MjAwKXtcclxuICAgICAgICAgICAgbGV0IG1lc3NhZ2U9Y29uZmlybShcIuaWsOWinuaIkOWKn++8jOehruWumui/lOWbnueUqOaIt+WIl+ihqOWQl++8n1wiKTtcclxuICAgICAgICAgICAgaWYobWVzc2FnZSl7XHJcbiAgICAgICAgICAgICAgICBsb2NhdGlvbi5hc3NpZ24oXCIvYWRtaW4vdXNlclwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBhbGVydChcIuaWsOWinuWksei0pe+8gVwiKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coSW5zZXJ0RmV0Y2guZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGlzTW9iaWxlOiBmdW5jdGlvbih2YWwpe1xyXG4gICAgICAgIHJldHVybiAvXigxM1swLTldfDE0WzAxNDU2ODc5XXwxNVswLTM1LTldfDE2WzI1NjddfDE3WzAtOF18MThbMC05XXwxOVswLTM1LTldKVxcZHs4fSQvLnRlc3QodmFsKTtcclxuICAgIH0sXHJcbiAgICBlcnJvclRleHQ6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgbGV0IGVycm9yVGV4dD1kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZXJyb3JUZXh0Jyk7XHJcbiAgICAgICAgZXJyb3JUZXh0LmlubmVyVGV4dD1cIlwiO1xyXG4gICAgfSxcclxufTtcclxuUEFHRS5pbml0KCk7Il19