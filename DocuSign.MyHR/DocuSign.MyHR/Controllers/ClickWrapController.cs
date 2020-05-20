﻿using System;
using System.Net;
using System.Net.Http;
using DocuSign.MyHR.Models;
using DocuSign.MyHR.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace DocuSign.MyHR.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    public class ClickWrapController : Controller
    {
        private readonly IClickWrapService _clickWrapService;

        public ClickWrapController(IClickWrapService clickWrapService)
        {
            _clickWrapService = clickWrapService;
        }

        [HttpPost]
        public IActionResult Index([FromBody] RequestClickWrapModel model)
        {
            var response = _clickWrapService.CreateTimeTrackClickWrap(Context.Account.Id, Context.User.Id, model.WorkLogs);

            return Ok(response.Content.ReadAsStringAsync().Result);
        }
    }
}