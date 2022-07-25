const PAGE={init:function(){this.bind()},bind:function(){let e=document.getElementById("login-btn"),t=(e.addEventListener("click",this.handlerLogin),document.getElementById("phone"));t.addEventListener("focus",this.errorText)},handlerLogin:async function(){var e=document.getElementById("phone").value,t=document.getElementById("password").value,n=document.getElementById("csrf").value;if(t&&e)if(PAGE.isMobile(e)){e=await fetch("/admin/login",{method:"POST",body:JSON.stringify({phone:e,password:t,csrf:n}),headers:{"Content-Type":"application/json"}}).then(e=>e.json());200===e.code?(alert(e.data.msg),location.reload()):(alert(e.data.msg),console.log(e.data))}else{let e=document.getElementById("errorText");e.innerText="手机格式不正确"}else alert("缺少参数!")},isMobile:function(e){return/^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/.test(e)},errorText:function(){let e=document.getElementById("errorText");e.innerText=""}};PAGE.init();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmpzIl0sIm5hbWVzIjpbIlBBR0UiLCJpbml0IiwidGhpcyIsImJpbmQiLCJsb2dpbkJ0biIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJwaG9uZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJoYW5kbGVyTG9naW4iLCJlcnJvclRleHQiLCJhc3luYyIsInZhbHVlIiwicGFzc3dvcmQiLCJjc3JmIiwiaXNNb2JpbGUiLCJsb2dpbkZldGNoIiwiZmV0Y2giLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImhlYWRlcnMiLCJDb250ZW50LVR5cGUiLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiYWxlcnQiLCJkYXRhIiwibXNnIiwicmVsb2FkIiwiY29uc29sZSIsImxvZyIsImxldCIsInZhbCIsInRlc3QiLCJpbm5lclRleHQiXSwibWFwcGluZ3MiOiJBQUFBLE1BQU1BLEtBQUksQ0FDTkMsS0FBTSxXQUNGQyxLQUFBQyxRQUVKQSxLQUFNLFdBQ0VDLElBQUFBLEVBQVNDLFNBQVNDLGVBQWUsYUFFakNDLEdBREpILEVBQVNJLGlCQUFpQixRQUFRTixLQUFLTyxjQUM3QkosU0FBU0MsZUFBZSxVQUNsQ0MsRUFBTUMsaUJBQWlCLFFBQVFOLEtBQUtRLFlBRXhDRCxhQUFjRSxpQkFDTkosSUFBQUEsRUFBTUYsU0FBU0MsZUFBZSxTQUFTTSxNQUN2Q0MsRUFBU1IsU0FBU0MsZUFBZSxZQUFZTSxNQUN6Q0UsRUFBQ1QsU0FBU0MsZUFBZSxRQUFRTSxNQUN6QyxHQUFJQyxHQUFhTixFQUViLEdBQUFQLEtBQUFlLFNBQUFSLEdBSUEsQ0FDQ1MsUUFBQUMsTUFBQSxlQUFBLENBQ0dELE9BQVcsT0FDSEUsS0FEOEJDLEtBQUFDLFVBQUEsQ0FFM0JBLE1BQUFBLEVBQ0FiLFNBRFVNLEVBRVBBLEtBQUFBLElBSndCUSxRQUFBLENBTzdCQyxlQUFBLHNCQUFBQyxLQUFBQyxHQUFBQSxFQUFBQyxRQUdnQkEsTUFBckJELEVBQVlBLE1BRWhCRSxNQUFNVixFQUFXVyxLQUFLQyxLQUR2QlosU0FBQWEsV0FFU0gsTUFBQ0csRUFBVEYsS0FBQUMsS0FDQ0UsUUFBQUMsSUFBQWYsRUFBQVcsV0FwQkwsQ0FDRUssSUFBSWhDLEVBQUtlLFNBQUxULGVBQXFCLGFBQ3ZCSSxFQUFVTCxVQUFTQyxlQUp2Qk8sTUFBRCxVQTBCRkUsU0FBQSxTQUFBa0IsR0F4Q0UsTUFBQSwrRUFBQUMsS0FBQUQsSUEyQ0h2QixVQUFPLFdBM0NKc0IsSUFBQXRCLEVBQUFMLFNBQUFDLGVBQUEsYUE2Q1BJLEVBQVd5QixVQUFVLEtBS3pCbkMsS0FGS0MiLCJmaWxlIjoibG9naW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBQQUdFPXtcclxuICAgIGluaXQ6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdGhpcy5iaW5kKCk7XHJcbiAgICB9LFxyXG4gICAgYmluZDogZnVuY3Rpb24oKXtcclxuICAgICAgICBsZXQgbG9naW5CdG49ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvZ2luLWJ0bicpO1xyXG4gICAgICAgIGxvZ2luQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyx0aGlzLmhhbmRsZXJMb2dpbik7XHJcbiAgICAgICAgbGV0IHBob25lPWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwaG9uZScpO1xyXG4gICAgICAgIHBob25lLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJyx0aGlzLmVycm9yVGV4dCk7XHJcbiAgICB9LFxyXG4gICAgaGFuZGxlckxvZ2luOiBhc3luYyBmdW5jdGlvbigpe1xyXG4gICAgICAgIGxldCBwaG9uZT1kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGhvbmUnKS52YWx1ZTtcclxuICAgICAgICBsZXQgcGFzc3dvcmQ9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Bhc3N3b3JkJykudmFsdWU7XHJcbiAgICAgICAgbGV0IGNzcmY9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NzcmYnKS52YWx1ZTtcclxuICAgICAgICBpZighcGFzc3dvcmQgfHwgIXBob25lKXtcclxuICAgICAgICAgICAgYWxlcnQoJ+e8uuWwkeWPguaVsCEnKVxyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9ZWxzZSBpZighUEFHRS5pc01vYmlsZShwaG9uZSkpe1xyXG4gICAgICAgICAgICBsZXQgZXJyb3JUZXh0PWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlcnJvclRleHQnKTtcclxuICAgICAgICAgICAgZXJyb3JUZXh0LmlubmVyVGV4dD1cIuaJi+acuuagvOW8j+S4jeato+ehrlwiO1xyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgbGV0IGxvZ2luRmV0Y2g9YXdhaXQgZmV0Y2goJy9hZG1pbi9sb2dpbicse1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgICAgICAgICAgcGhvbmU6IHBob25lLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkOiBwYXNzd29yZCxcclxuICAgICAgICAgICAgICAgICAgICBjc3JmOiBjc3JmLFxyXG4gICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6J2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSkudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpO1xyXG4gICAgICAgICAgICBpZihsb2dpbkZldGNoLmNvZGUgPT09IDIwMCl7XHJcbiAgICAgICAgICAgICAgICBhbGVydChsb2dpbkZldGNoLmRhdGEubXNnKVxyXG4gICAgICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgYWxlcnQobG9naW5GZXRjaC5kYXRhLm1zZylcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGxvZ2luRmV0Y2guZGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgaXNNb2JpbGU6IGZ1bmN0aW9uKHZhbCl7XHJcbiAgICAgICAgcmV0dXJuIC9eKDEzWzAtOV18MTRbMDE0NTY4NzldfDE1WzAtMzUtOV18MTZbMjU2N118MTdbMC04XXwxOFswLTldfDE5WzAtMzUtOV0pXFxkezh9JC8udGVzdCh2YWwpO1xyXG4gICAgfSxcclxuICAgIGVycm9yVGV4dDogZnVuY3Rpb24oKXtcclxuICAgICAgICBsZXQgZXJyb3JUZXh0PWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlcnJvclRleHQnKTtcclxuICAgICAgICBlcnJvclRleHQuaW5uZXJUZXh0PVwiXCI7XHJcbiAgICB9LFxyXG59O1xyXG5QQUdFLmluaXQoKTsiXX0=