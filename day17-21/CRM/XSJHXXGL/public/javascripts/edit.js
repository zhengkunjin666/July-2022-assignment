const PAGE={init:function(){this.bind()},bind:function(){window.addEventListener("load",this.highlight);let e=document.getElementById("edit-submit"),t=(e.addEventListener("click",this.handlerUpdate),document.getElementById("edit-phone"));t.addEventListener("focus",this.errorText)},highlight:function(){let t=window.location.href,n=document.getElementsByClassName("nav-item");for(let e=0;e<n.length;e++){var i=n[e].dataset.id;-1!=t.indexOf(i)&&(n[e].className="nav-item active")}},handlerUpdate:async function(e){var e=e.target.dataset.id,t=document.getElementById("edit-name").value.trim(),n=document.getElementById("edit-phone").value.trim(),i=(console.log(document.getElementById("edit-password").value.trim()),document.getElementById("edit-password").value.trim()),d=document.getElementById("edit-role").value.trim(),o=document.getElementById("csrf").value;if(t&&n&&i&&d)if(PAGE.isMobile(n)){e=await fetch("/admin/user",{method:"PUT",body:JSON.stringify({id:e,name:t,phone:n,password:i,role:d,csrf:o}),headers:{"content-type":"application/json"}}).then(e=>e.json());200===e.code?confirm("保存成功，确定返回用户列表吗？")&&location.assign("/admin/user"):(alert("保存失败！"),console.log(e.data))}else{let e=document.getElementById("errorText");void(e.innerText="手机格式不正确")}else alert("缺少参数！")},isMobile:function(e){return/^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/.test(e)},errorText:function(){let e=document.getElementById("errorText");e.innerText=""}};PAGE.init();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXQuanMiXSwibmFtZXMiOlsiUEFHRSIsImluaXQiLCJ0aGlzIiwiYmluZCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJoaWdobGlnaHQiLCJlZGl0U3VibWl0IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImVkaXRQaG9uZSIsImhhbmRsZXJVcGRhdGUiLCJlcnJvclRleHQiLCJocmVmIiwibG9jYXRpb24iLCJuYXZJdGVtIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImxldCIsImkiLCJsZW5ndGgiLCJpZCIsImRhdGFzZXQiLCJjbGFzc05hbWUiLCJhc3luYyIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJ0cmltIiwicGhvbmUiLCJuYW1lIiwibG9nIiwicGFzc3dvcmQiLCJyb2xlIiwiYWxlcnQiLCJpc01vYmlsZSIsIlVwZGF0ZUZldGNoIiwiZmV0Y2giLCJpbm5lclRleHQiLCJjc3JmIiwiSlNPTiIsInN0cmluZ2lmeSIsImNvbnRlbnQtdHlwZSIsInJlc3BvbnNlIiwianNvbiIsImNvbmZpcm0iLCJhc3NpZ24iLCJtZXNzYWdlIiwidGVzdCIsInZhbCJdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTUEsS0FBSSxDQUNOQyxLQUFNLFdBQ0ZDLEtBQUFDLFFBRUpBLEtBQU0sV0FDRkMsT0FBT0MsaUJBQWlCLE9BQU9ILEtBQUtJLFdBQ2hDQyxJQUFBQSxFQUFXQyxTQUFTQyxlQUFlLGVBRW5DQyxHQURKSCxFQUFXRixpQkFBaUIsUUFBUUgsS0FBS1MsZUFDM0JILFNBQVNDLGVBQWUsZUFDdENDLEVBQVVMLGlCQUFpQixRQUFRSCxLQUFLVSxZQUU1Q04sVUFBVyxXQUNITyxJQUFJQSxFQUFDVCxPQUFPVSxTQUFTRCxLQUNyQkUsRUFBUVAsU0FBU1EsdUJBQXVCLFlBQzVDLElBQUlDLElBQUlDLEVBQUUsRUFBRUEsRUFBRUgsRUFBUUksT0FBT0QsSUFBSSxDQUE3QkQsSUFBS0csRUFBVEwsRUFBY0EsR0FBQUEsUUFBZEssSUFDSSxHQUFPTCxFQUFBQSxRQUFXTSxLQUVkTixFQUFRRyxHQUFHSSxVQUFVLHFCQUU1QlgsY0FBQVksZUFBQUMsR0FuQkVQLElBQUFHLEVBQUFJLEVBQUFDLE9BQUFKLFFBQUFELEdBcUJQVCxFQUFlSCxTQUFBQyxlQUFxQixhQUFBaUIsTUFBQUMsT0FDMUJDLEVBQU1wQixTQUFRYSxlQUFwQixjQUFBSyxNQUFBQyxPQUVJQyxHQURBQyxRQUFLckIsSUFBQUEsU0FBU0MsZUFBZSxpQkFBbUJrQixNQUFwREEsUUFDVW5CLFNBQVNDLGVBQWUsaUJBQW9Ca0IsTUFBdERBLFFBQ1FHLEVBQUl0QixTQUFTQyxlQUFlLGFBQUFpQixNQUFpQkEsT0FDakRLLEVBQVF2QixTQUFDQSxlQUFTQyxRQUFlaUIsTUFDakNNLEdBQUlILEdBQUNyQixHQUFTQyxHQUFldUIsRUFHN0JDLEdBQU1qQyxLQUFBa0MsU0FBTk4sR0FBQUssQ0FRQUUsUUFBa0JDLE1BQU0sY0FBYyxDQUx0Q3BDLE9BQUtrQyxNQUNEdEIsS0FBQUEsS0FBVUosVUFBU0MsQ0FDYjRCLEdBQUFBLEVBQ1ZSLEtBQUFBLEVBQ0hELE1BQUFBLEVBT09HLFNBQVVBLEVBUGpCQyxLQUFBQSxFQUNHRyxLQUFZRyxJQUVOQyxRQUFLQyxDQUFVQyxlQUFBLHNCQUdqQmIsS0FBT0EsR0FIVWMsRUFBQUMsUUFBQSxNQUlqQlosRUFBVUEsS0FKT2EsUUFBQSxvQkFGaUI5QixTQUFBK0IsT0FBQSxnQkFVOUJaLE1BQUEsU0FHSlMsUUFBUVosSUFBSVksRUFBU0MsV0FyQnpCLENBQ0ExQixJQUFBTCxFQUFBSixTQUFBQyxlQUFBLGtCQUNIRyxFQUFBeUIsVUFBQSxnQkFKT0osTUFBQ3pCLFVBa0NiMEIsU0FUWVksU0FBUUYsR0FVaEIsTUFBTywrRUFBK0VHLEtBQUtDLElBRS9GcEMsVUFWWUUsV0FDSEcsSUFBQUwsRUFBQUosU0FBQUMsZUFBQSxhQUpMRyxFQUtLeUIsVUFBQSxLQWFickMsS0FWU0MiLCJmaWxlIjoiZWRpdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFBBR0U9e1xyXG4gICAgaW5pdDogZnVuY3Rpb24oKXtcclxuICAgICAgICB0aGlzLmJpbmQoKTtcclxuICAgIH0sXHJcbiAgICBiaW5kOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJyx0aGlzLmhpZ2hsaWdodCk7XHJcbiAgICAgICAgbGV0IGVkaXRTdWJtaXQ9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXQtc3VibWl0Jyk7XHJcbiAgICAgICAgZWRpdFN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsdGhpcy5oYW5kbGVyVXBkYXRlKTtcclxuICAgICAgICBsZXQgZWRpdFBob25lPWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0LXBob25lJyk7XHJcbiAgICAgICAgZWRpdFBob25lLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJyx0aGlzLmVycm9yVGV4dCk7XHJcbiAgICB9LFxyXG4gICAgaGlnaGxpZ2h0OiBmdW5jdGlvbigpe1xyXG4gICAgICAgIGxldCBocmVmPXdpbmRvdy5sb2NhdGlvbi5ocmVmO1xyXG4gICAgICAgIGxldCBuYXZJdGVtPWRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25hdi1pdGVtJyk7XHJcbiAgICAgICAgZm9yKGxldCBpPTA7aTxuYXZJdGVtLmxlbmd0aDtpKyspe1xyXG4gICAgICAgICAgICBsZXQgaWQ9bmF2SXRlbVtpXS5kYXRhc2V0LmlkO1xyXG4gICAgICAgICAgICBpZihocmVmLmluZGV4T2YoaWQpICE9IC0xKXtcclxuICAgICAgICAgICAgICAgIG5hdkl0ZW1baV0uY2xhc3NOYW1lPVwibmF2LWl0ZW0gYWN0aXZlXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgaGFuZGxlclVwZGF0ZTogYXN5bmMgZnVuY3Rpb24oZXZlbnQpe1xyXG4gICAgICAgIGxldCBpZD1ldmVudC50YXJnZXQuZGF0YXNldC5pZDtcclxuICAgICAgICBsZXQgbmFtZT1kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdC1uYW1lJykudmFsdWUudHJpbSgpO1xyXG4gICAgICAgIGxldCBwaG9uZT1kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdC1waG9uZScpLnZhbHVlLnRyaW0oKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdC1wYXNzd29yZCcpLnZhbHVlLnRyaW0oKSlcclxuICAgICAgICBsZXQgcGFzc3dvcmQ9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXQtcGFzc3dvcmQnKS52YWx1ZS50cmltKCk7XHJcbiAgICAgICAgbGV0IHJvbGU9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXQtcm9sZScpLnZhbHVlLnRyaW0oKTtcclxuICAgICAgICBsZXQgY3NyZj1kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3NyZicpLnZhbHVlO1xyXG4gICAgICAgIGlmKCFuYW1lIHx8ICFwaG9uZSB8fCAhcGFzc3dvcmQgfHwgIXJvbGUpe1xyXG4gICAgICAgICAgICBhbGVydChcIue8uuWwkeWPguaVsO+8gVwiKVxyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmKCFQQUdFLmlzTW9iaWxlKHBob25lKSl7XHJcbiAgICAgICAgICAgIGxldCBlcnJvclRleHQ9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Vycm9yVGV4dCcpO1xyXG4gICAgICAgICAgICBlcnJvclRleHQuaW5uZXJUZXh0PVwi5omL5py65qC85byP5LiN5q2j56GuXCI7XHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH07XHJcbiAgICAgICAgbGV0IFVwZGF0ZUZldGNoPWF3YWl0IGZldGNoKCcvYWRtaW4vdXNlcicse1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQVVQnLFxyXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgICAgICBpZDogaWQsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiBuYW1lLFxyXG4gICAgICAgICAgICAgICAgcGhvbmU6IHBob25lLFxyXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQ6IHBhc3N3b3JkLFxyXG4gICAgICAgICAgICAgICAgcm9sZTogcm9sZSxcclxuICAgICAgICAgICAgICAgIGNzcmY6IGNzcmYsXHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICBoZWFkZXJzOntcclxuICAgICAgICAgICAgICAgICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgIGlmKFVwZGF0ZUZldGNoLmNvZGU9PT0yMDApe1xyXG4gICAgICAgICAgICBsZXQgbWVzc2FnZT1jb25maXJtKFwi5L+d5a2Y5oiQ5Yqf77yM56Gu5a6a6L+U5Zue55So5oi35YiX6KGo5ZCX77yfXCIpO1xyXG4gICAgICAgICAgICBpZihtZXNzYWdlKXtcclxuICAgICAgICAgICAgICAgIGxvY2F0aW9uLmFzc2lnbihcIi9hZG1pbi91c2VyXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGFsZXJ0KFwi5L+d5a2Y5aSx6LSl77yBXCIpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhVcGRhdGVGZXRjaC5kYXRhKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgaXNNb2JpbGU6IGZ1bmN0aW9uKHZhbCl7XHJcbiAgICAgICAgcmV0dXJuIC9eKDEzWzAtOV18MTRbMDE0NTY4NzldfDE1WzAtMzUtOV18MTZbMjU2N118MTdbMC04XXwxOFswLTldfDE5WzAtMzUtOV0pXFxkezh9JC8udGVzdCh2YWwpO1xyXG4gICAgfSxcclxuICAgIGVycm9yVGV4dDogZnVuY3Rpb24oKXtcclxuICAgICAgICBsZXQgZXJyb3JUZXh0PWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlcnJvclRleHQnKTtcclxuICAgICAgICBlcnJvclRleHQuaW5uZXJUZXh0PVwiXCI7XHJcbiAgICB9LFxyXG59O1xyXG5QQUdFLmluaXQoKTsiXX0=