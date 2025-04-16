let modoAvancado = false;

      function alternarModo() {
        modoAvancado = !modoAvancado;
        document.getElementById("campoComprimento").classList.toggle("oculto");
        document.getElementById("resultado").innerHTML = "";
        const button = document.getElementById("alternarModo");
        button.innerText = modoAvancado
          ? "Calcular Comprimento Ideal"
          : "Verificar Rampa Existente";
      }

      function calcularRampa() {
        const altura = document.getElementById("altura").value;
        const inclinacaoMax = document.getElementById("tipo").value;

        if (isNaN(altura) || altura <= 0) {
          document.getElementById("resultado").innerText =
            "Insira uma altura válida.";
          return;
        }

        if (modoAvancado) {
          const comprimento = document.getElementById("comprimento").value;

          if (isNaN(comprimento) || comprimento <= 0) {
            document.getElementById("resultado").innerText =
              "Insira um comprimento válido.";
            return;
          }

          const inclinacaoReal = (altura / comprimento) * 100;
          const status =
            inclinacaoReal <= inclinacaoMax
              ? "Dentro da norma ABNT NBR 9050"
              : "Fora da norma ABNT NBR 9050";

          const corStatus = inclinacaoReal <= inclinacaoMax ? "green" : "red";

          document.getElementById("resultado").innerHTML = `
              <p>Inclinação da rampa: <strong style="color: ${corStatus};">${inclinacaoReal.toFixed(
            2
          )}%</strong></p>
              <p>Status: <strong style="color: ${corStatus}">${status}</strong></p>
            `;
        } else {
          const comprimentoMin = altura / (inclinacaoMax / 100);
          const inclinacaoReal = (altura / comprimentoMin) * 100;

          const status =
            inclinacaoReal <= inclinacaoMax
              ? "Dentro da norma ABNT NBR 9050"
              : "Fora da norma ABNT NBR 9050";

          const corStatus = inclinacaoReal <= inclinacaoMax ? "green" : "red";

          document.getElementById("resultado").innerHTML = `
        <p>Comprimento mínimo da rampa: <strong>${comprimentoMin.toFixed(
          2
        )} cm</strong></p>
        <p>Inclinação: <strong>${inclinacaoReal.toFixed(2)}%</strong></p>
        <p>Status: <strong style="color: ${corStatus};">${status}</strong></p>
        `;
        }
      }