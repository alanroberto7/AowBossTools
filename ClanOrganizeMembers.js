var $aow = null;

(() => {
  const script = document.createElement('script');
  script.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
  document.head.appendChild(script);

  script.addEventListener('load', () => {
    $aow = new AoW();
    $aow.html.ShowButton.click();
  });
})();

function AoW() {
  let self = this;
  self.url = "http://www.armyneedyou.com/team/user_export";
  self.type = "current"; // current, session
  self.dateType = "lastday" // today, lastday, 88 (numero da temporada)
  self.battle = "pvp"
  self.debugger_fxLoadMembers = false;
  self.debugger_fxOrganizeMembers = false;
  self.debugger_fxListarMembros = false;
  self.debugger_fxListarFixos = false;
  self.debugger_fxListarTrocas = false;
  self.debugger_fxListarMembrosPosTrocas = false;
  self.listClan = [{
    Id: 8961,
    Name: "[BOSS] FOB FORÇA BRASILEIRA",
    Code: "[B0SS] FOB1",
    Token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1aWQiOiI4OTYxIn0.Og1dqBOmxjQWgRkrQAkKdujUmnaVNhgCNppV8mpDOLE",
    Members: [],
    FixedMembers: [
      "34873241",  //BOSS Neguinhoᶠᵒᵇ
      "8674083",   //BOSS Alan ᶠᵒᵇ  
    ]
  }, {
    Id: 96873,
    Code: "[BOSS] FOB2",
    Name: "[BOSS] FOB2 FORÇA BRASILEIRA",
    Token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1aWQiOiI5Njg3MyJ9.r6armuLGZ_MBTRhVB2TACKCCr8owWbWZT_gjoELqDeM",
    Members: [],
    FixedMembers: [
      "45042124",  //BOSS Renata
      "9138909",   //BOSS Alan² ᶠᵒᵇ
      "4113732",   //BOSS Kakashi -B 
      "21906149",  //BOSS Ciryus ᶠᵒᵇ 
      "31897672",  //BOSS Maximus
      "8749059",   //JEREBA ᶠᵒᵇ  
      "31679348",  //9Julho
      "32761106",  //BOSS SPV ⁿᵒ ʷᵃʳ 
      "32643013",  //Lilo e Stitch
      "31622081",  //BOSS R.P.V.
    ]
  }, {
    Id: 124511,
    Code: "[B1SS] B1",
    Name: "[BOSS] Base 1 Officials Super Squad",
    Token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1aWQiOiIxMjQ1MTEifQ.F7KFq0ec8_EzibPNpM7-4-hp8AA4wH4rkiA9S4tRsSY",
    Members: [],
    FixedMembers: [
      "49955327",  //BOSS Nazar 
      "49508942",  //BOSS FelipeBR 
    ]
  }, {
    Id: 111,
    Code: "[B2SS] B2",
    Name: "[BOSS] Base 2 Officials Super Squad",
    Token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1aWQiOiIxMTEifQ.q64gvOJQJxrn1dHKqHXKXcjAiRc8cLUo2zmlA1-Yxoc",
    Members: [],
    FixedMembers: [
      "44459220",  //Vanessa FAM ᴮᵒˢˢ 
      "16046856",  //BOSS FabioPeper
    ]
  }, {
    Id: 434,
    Code: "[B3SS] B3",
    Name: "[BOSS] Base 3 Officials Super Squad",
    Token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1aWQiOiI0MzQifQ.f-ypoMbeZIWIy70K7EAs0HekeVkM6bxhVpF-ocLBAgc",
    Members: [],
    FixedMembers: [
      "8329375",   //BOSS Carped13m
      "21420744",  //8° AnjoJustMeᶠᵒᵇ   
      "5060368",   //BOSS lima01 
      "9336929",   //SmokingSnakes
      "40554892",  //Emunah
      "47696588",  //BOSS FabioJF 
      "20716375",  //BOSS Junior71
      "6818820",   //BOSS CauNas
      "50989881",  //BOSS JÒŤÄ ĶÄ 
      "9765666",   //BOSS Thor-rj
    ]
  }, {
    Id: 1264,
    Code: "[BO4S] B4",
    Name: "[BOSS] Base 4 Officials Super Squad",
    Token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1aWQiOiIxMjY0In0.T0ZwLBdKnvWV55QenqiHJf0oj5Rtfo5Cjj8XFR5UT14",
    Members: [],
    FixedMembers: [
      "31861030",  //Thor-rj2
      //"13721291",  //Motörhead ᵇᵒˢˢ 
    ]
  }, {
    Id: 13166,
    Code: "[B5SS] B5",
    Name: "[BOSS] Base 5 Officials Super Squad",
    Token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1aWQiOiIxMzE2NiJ9.UALR3aT5an8NDt1v3JFgBEmWyZeGKE004obR0aTlGKI",
    Members: [],
    FixedMembers: [
      "45020374",  //BOSS Jean Grey 
      "54718072",  //BOSS Marcelo 2 
      "34371337",  //BOSS MarcosD  
    ]
  }]

  self.fxLoadMembers = async () => {
    if (self.debugger_fxLoadMembers) {
      debugger;
    }

    if (self.listClan.length) {
      for (let i = 0; i < self.listClan.length; i++) {
        let clan = self.listClan[i];
        clan.Members = [];

        let rs = await fetch(`${self.url}?type=${self.type}&dateType=${self.dateType}&token=${clan.Token}&battle=${self.battle}`, {
          method: 'GET',
        }).then(res => res.text())

        if (rs) {
          rs.split('\n').map(item => {
            const [Ranking, Id, Name, Trophies, Challenges, LastLogin] = item.split(',');

            if (Id && !isNaN(Id)) {
              let fixed = [].concat(...self.listClan.map(o => o.FixedMembers)).find(o => o == Id)?.length > 0
              clan.Members.push({
                Id,
                Ranking,
                Name,
                Trophies,
                Challenges,
                LastLogin,
                Fixed: fixed,
                currentClan: { Id: clan.Id, Code: clan.Code, Name: clan.Name },
                newClan: fixed ? { Id: clan.Id, Code: clan.Code, Name: clan.Name } : null
              });
            }
          });
        }
        clan.Members.sort((a, b) => {
          if (a.Ranking == 0) return 1;
          if (b.Ranking == 0) return -1;
          return a.Ranking - b.Ranking;
        });
      }
    }
  };

  self.fxOrganizeMembers = async () => {
    if (self.debugger_fxOrganizeMembers) {
      debugger;
    }

    let clanMembers = [].concat(...self.listClan.map(o => o.Members));

    let allMembersFixed = clanMembers.filter(o => o.Fixed);
    let allMembers = clanMembers.filter(o => !o.Fixed).sort((a, b) => {
      if (a.Ranking == 0) return 1;
      if (b.Ranking == 0) return -1;
      return a.Ranking - b.Ranking;
    });

    for (let i = 0; i < self.listClan.length; i++) {
      let clan = self.listClan[i];

      let fixedMembers = allMembersFixed.filter(member => clan.FixedMembers.includes(member.Id));
      let newMembers = allMembers.splice(0, 50 - fixedMembers?.length)

      newMembers.forEach(member => {
        member.newClan = { Id: clan.Id, Code: clan.Code, Name: clan.Name };
      });

      fixedMembers.forEach(member => {
        member.newClan = { Id: clan.Id, Code: clan.Code, Name: clan.Name };
      });

      clan.NewMembers = [...fixedMembers, ...newMembers].sort((a, b) => {
        if (a.Ranking == 0) return 1;
        if (b.Ranking == 0) return -1;
        return a.Ranking - b.Ranking;
      });
    }
  }

  self.fxListarMembros = async () => {
    if (self.debugger_fxListarMembros) {
      debugger;
    }

    self.fxClearLog();

    await self.fxLoadMembers();

    let log = "MEMBROS ATUAIS\n\n";
    for (let i = 0; i < self.listClan.length; i++) {
      let clan = self.listClan[i];

      log += `▬▬▬▬▬ ${clan.Code} - ${clan.Id} (${clan.Members.length}/50) ▬▬▬▬▬\n\n`;
      log += `${clan.Members.map((member, indice) => `${(indice + 1).toString().padStart(2, ' ')}º ${member.Id.padEnd(8, ' ')}\t${member.Name.replace(/["""]/g, '').trim().padEnd(16, ' ')}\t★ ${member.Ranking.padEnd(6, ' ')} ♜ ${member.Trophies}\n`)}\n`.replace(/[,]/g, '');
      log += `\n`;
    }

    self.fxLog(log);
  }

  self.fxListarFixos = async () => {
    if (self.debugger_fxListarFixos) {
      debugger;
    }

    self.fxClearLog();

    await self.fxLoadMembers();
    await self.fxOrganizeMembers();

    let log = "MEMBROS FIXOS\n\n";
    for (let i = 0; i < self.listClan.length; i++) {
      let clan = self.listClan[i];
      let fixedMembers = clan.NewMembers.filter(member => clan.FixedMembers.includes(member.Id));

      log += `▬▬▬▬▬ ${clan.Code} - ${clan.Id} ▬▬▬▬▬\n\n`;
      log += `${fixedMembers.map((member, indice) => `Id: ${member.Id.padEnd(8, ' ')}\t${member.Name.replace(/["""]/g, '').trim().padEnd(16, ' ')}\n`)}\n`.replace(/[,]/g, '');
      log += `\n`;
    }

    self.fxLog(log);
  }

  self.fxListarTrocas = async () => {
    if (self.debugger_fxListarTrocas) {
      debugger;
    }

    self.fxClearLog();

    await self.fxLoadMembers();
    await self.fxOrganizeMembers();

    let log = "TROCAS\n\n";
    for (let i = 0; i < self.listClan.length; i++) {
      let clan = self.listClan[i];
      let leaves = clan.Members.filter(o => o.currentClan.Id != o.newClan.Id);
      let comes = clan.NewMembers.filter(o => o.currentClan.Id != o.newClan.Id);

      log += `▬▬▬▬▬ ${clan.Code} - ${clan.Id} ▬▬▬▬▬\n\n`;
      log += `Sai:   \n${leaves.map(member => `Id: ${member.Id.padEnd(8, ' ')}\t${member.Name.replace(/["""]/g, '').trim().padEnd(16, ' ')} \t🢂 ${member.newClan.Code} - ${member.newClan.Id}\n`)}\n`.replace(/[,]/g, '');
      log += `Entra: \n${comes.map(member => `Id: ${member.Id.padEnd(8, ' ')}\t${member.Name.replace(/["""]/g, '').trim().padEnd(16, ' ')} \t🢀 ${member.currentClan.Code} - ${member.currentClan.Id}\n`)}\n`.replace(/[,]/g, '');
      log += `\n`;
    }

    self.fxLog(log);
  }

  self.fxListarMembrosPosTrocas = async () => {
    if (self.debugger_fxListarMembrosPosTrocas) {
      debugger;
    }

    self.fxClearLog();

    await self.fxLoadMembers();
    await self.fxOrganizeMembers();

    let log = "MEMBROS POS TROCAS\n\n";
    for (let i = 0; i < self.listClan.length; i++) {
      let clan = self.listClan[i];

      log += `▬▬▬▬▬ ${clan.Code} - ${clan.Id} (${clan.NewMembers.length}/50) ▬▬▬▬▬\n\n`;
      log += `${clan.NewMembers.map((member, indice) => `${(indice + 1).toString().padStart(2, ' ')}º ${member.Id.padEnd(8, ' ')}\t${member.Name.replace(/["""]/g, '').trim().padEnd(16, ' ')}\t★ ${member.Ranking.padEnd(6, ' ')} ♜ ${member.Trophies}\n`)}\n`.replace(/[,]/g, '');
      log += `\n`;
    }

    self.fxLog(log);
  }

  self.fxLog = (txt) => {
    let _old = $("#txtLog").val();
    if (!_old) {
      _old = "";
    }

    $("#txtLog").val(_old + "\r\n" + txt)
    //$("#txtLog").scrollTop($("#txtLog")[0].scrollHeight);

  }

  self.fxClearLog = () => {
    $("#txtLog").val("")
  }

  self.fxFormatText = (text, defaultSize) => {
    let resultText = text.replace(/["""]/g, '');
    let defaultTabs = defaultSize ? Math.floor(defaultSize / 8) : 8;
    let textTabs = Math.floor(text.length / 8);
    let resultTabs = defaultTabs <= textTabs ? "\t" : "\t".repeat(defaultTabs - textTabs + 1)

    return resultText + resultTabs;
  }

  self.html = new function () {
    html = this;

    //conteudo
    html.conteudo = $("<div>")
      //Drop type
      .append($("<div>")
        .css({
          margin: "5px 0px"
        })
        .append($("<label>").css({
          display: "inline-block",
          width: "20%",
        }).append("Tipo de temporada:"))
        .append($("<select>")

          .css({
            width: "78%"
          })
          .append($("<option>").val("current").append("Temporada Atual"))
          .append($("<option>").val("session").append("Informar temporada"))
          .val(self.type)
          .change(function () {
            self.type = $(this).val();

            if (self.type == "current") {
              $("#txtDateType").hide();
              $("#drpDateType").show();
              $("#drpDateType").change();
            } else {
              $("#drpDateType").hide();
              $("#txtDateType").show();
              $("#txtDateType").change();
            }
          })
        )
      )
      //Drop dateType
      .append($("<div>")
        .css({
          margin: "5px 0px"
        })
        .append($("<label>").css({
          display: "inline-block",
          width: "20%",
        }).append("Data/Temporada:"))
        .append($("<select>")
          .attr({
            id: "drpDateType",
          })
          .css({
            width: "78%",
            display: self.type == "current" ? "" : "none"
          })
          .append($("<option>").val("today").append("Hoje"))
          .append($("<option>").val("lastday").append("Último Reset"))
          .val(self.dateType)
          .change(function () {
            self.dateType = $(this).val();
          })
        )
        .append($("<input>")
          .attr({
            id: "txtDateType",
            autocomplete: "off",
            type: "number"
          })
          .css({
            width: "78%",
            border: "1.5px solid #ccc",
            display: self.type == "current" ? "none" : ""
          })
          .val(self.dateType)
          .change(function () {
            self.dateType = $(this).val();
          })
        )
      )
      //Botoes
      .append($("<div>")
        .append($("<input>")
          .attr({
            id: "btnHide",
            type: "button",
            value: "Hide"
          })
          .css({
            'position': 'fixed',
            'width': '35px',
            'height': '35px',
            'bottom': '30px',
            'right': '50px',
            'background-color': '#00f',
            'color': '#FFF',
            'border-radius': '50px',
            'text-align': 'center',
            'box-shadow': '1px 1px 2px #999',
            'font-size': '8px'
          })
          .click(function () {
            html.Modal.hide();
            html.ShowButton.show();
          })
        )
        .append($("<input>")
          .attr({
            type: "button",
            value: "Listar membros"
          })
          .css({
            margin: "0px 4px 0px 0px",
            border: "1.5px solid #ccc",
            background: "#ccc",
            cursor: "pointer",
            width: "24%"
          })
          .click(function () {
            self.fxListarMembros();
          })
        )
        .append($("<input>")
          .attr({
            type: "button",
            value: "Listar membros fixos"
          })
          .css({
            margin: "0px 4px 0px 0px",
            border: "1.5px solid #ccc",
            background: "#ccc",
            cursor: "pointer",
            width: "24%"
          })
          .click(function () {
            self.fxListarFixos();
          })
        )
        .append($("<input>")
          .attr({
            type: "button",
            value: "Listar trocas"
          })
          .css({
            margin: "0px 4px 0px 0px",
            border: "1.5px solid #ccc",
            background: "#ccc",
            cursor: "pointer",
            width: "24%"
          })
          .click(function () {
            self.fxListarTrocas();
          })
        ).append($("<input>")
          .attr({
            type: "button",
            value: "Listar membros pos trocas"
          })
          .css({
            margin: "0px 4px 0px 0px",
            border: "1.5px solid #ccc",
            background: "#ccc",
            cursor: "pointer",
            width: "24%"
          })
          .click(function () {
            self.fxListarMembrosPosTrocas();
          })
        )
      )
      //Log
      .append($("<div>")
        .append($("<span>").append(""))
        .append($("<textarea>")
          .attr({
            id: "txtLog",
            readonly: "readonly",
            rows: "20",
            cols: "100",
          })
          .css({
            width: "98%",
            height: "80vh",
            margin: "2px 0px 0px 0px",
            "font-family": "Consolas",
            "font-size": "12px"
          })
        )
      )

    html.Modal = $("<div>")
      .css({
        'display': 'none',
        'position': 'fixed',
        'z-index': '1000',
        'left': '0',
        'top': '0',
        'width': '100%',
        'height': '100%',
        'overflow': 'auto',
        'background-color': 'rgb(0,0,0)',
        'background-color': 'rgba(0,0,0,0.4)'
      })
      .append($("<div>")
        .css({
          'background-color': '#fefefe',
          'margin': '0px auto',
          'padding': '10px',
          'border': '2px solid #888',
          'height': 'calc(100% - 24px)'
        })
        .append(html.conteudo))
      .appendTo("body");


    html.ShowButton = $("<input>")
      .attr({
        id: "btnShow",
        type: "button",
        value: "Show"
      })
      .css({
        'position': 'fixed',
        'width': '35px',
        'height': '35px',
        'bottom': '30px',
        'right': '50px',
        'background-color': '#00f',
        'color': '#FFF',
        'border-radius': '50px',
        'text-align': 'center',
        'box-shadow': '1px 1px 2px #999',
        'font-size': '8px',
        'z-index': '1000',
      })
      .click(function () {
        html.Modal.show();
        html.ShowButton.hide();
      })
      .appendTo("body");
  }
}
