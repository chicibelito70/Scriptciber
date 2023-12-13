async function enviarScript(scriptText){
	const lines = scriptText.split(/[\n\t]+/).map(line => line.trim()).filter(line => line);
	main = document.querySelector("#main"),
	textarea = main.querySelector(`div[contenteditable="true"]`)
	
	if(!textarea) throw new Error("Con una conversacion abierta")
	
	for(const line of lines){
		console.log(line)
	
		textarea.focus();
		document.execCommand('insertText', false, line);
		textarea.dispatchEvent(new Event('change', {bubbles: true}));
	
		setTimeout(() => {
			(main.querySelector(`[data-testid="send"]`) || main.querySelector(`[data-icon="send"]`)).click();
		}, 100);
		
		if(lines.indexOf(line) !== lines.length - 1) await new Promise(resolve => setTimeout(resolve, 250));
	}
	
	return lines.length;
}

enviarScript(`

El Reino de las Estaciones Eternas

Hace mucho tiempo, en un reino lejano donde las estaciones del año duraban eternamente, 
vivía una joven llamada Aria. Este reino mágico, conocido como Eteria, estaba dividido 
en cuatro regiones, cada una gobernada por un ser místico que personificaba una estación.
Aria, curiosa y valiente, siempre se preguntaba por qué las estaciones no cambiaban en 
Eteria como lo hacían en otros lugares. Un día, explorando el bosque cercano, encontró 
una antigua puerta secreta decorada con runas mágicas. Decidida a descubrir el misterio, 
utilizó una llave legendaria que había heredado de su abuela para abrirla.
Al cruzar la puerta, Aria se encontró en un mundo deslumbrante donde las estaciones 
cambiaban en ciclos armoniosos. Maravillada, descubrió que este lugar era el Reino de 
las Estaciones Cambiantes, y era el equilibrio necesario para el reino de Eteria.
Aria conoció a cuatro guardianes mágicos, cada uno encargado de preservar y equilibrar 
una estación en el mundo exterior. Había Zephyr, el guardián de la primavera; Ember, 
la protectora del verano; Terra, la custodia del otoño; y Frost, el guardián del invierno.
Sin embargo, Aria también descubrió que un malvado hechicero llamado Umbra había sellado 
la puerta que conectaba ambos mundos para mantener las estaciones en Eteria eternamente. 
Este acto, hecho por celos y miedo a perder su poder, había sumido al Reino de las Estaciones Cambiantes en el caos.
Decidida a devolver el equilibrio, Aria se propuso liberar a las estaciones y derrotar a 
Umbra. Con la ayuda de los guardianes, emprendió un viaje por el Reino de las Estaciones 
Cambiantes, enfrentando desafíos mágicos y descubriendo la importancia de cada estación en 
la naturaleza y la vida.
A lo largo de su odisea, Aria aprendió valiosas lecciones de los guardianes y de los habitantes 
mágicos de cada estación. Se dio cuenta de que la belleza de la vida radica en la constante 
transformación y renovación. Con coraje y determinación, Aria enfrentó a Umbra en una épica 
batalla mágica, liberando las estaciones y restaurando el equilibrio entre ambos reinos.
Al regresar a Eteria, Aria compartió su experiencia con los habitantes, enseñándoles a apreciar 
la cambiante naturaleza de las estaciones y la importancia de aceptar el flujo constante de la vida. 
Desde entonces, Eteria floreció con la diversidad de las estaciones, y sus habitantes vivieron en 
armonía con la naturaleza que los rodeaba. Aria se convirtió en una leyenda, recordada como la 
valiente exploradora que trajo la magia de las estaciones a su reino

El Reino de las Estaciones Eternas

Hace mucho tiempo, en un reino lejano donde las estaciones del año duraban eternamente, 
vivía una joven llamada Aria. Este reino mágico, conocido como Eteria, estaba dividido 
en cuatro regiones, cada una gobernada por un ser místico que personificaba una estación.
Aria, curiosa y valiente, siempre se preguntaba por qué las estaciones no cambiaban en 
Eteria como lo hacían en otros lugares. Un día, explorando el bosque cercano, encontró 
una antigua puerta secreta decorada con runas mágicas. Decidida a descubrir el misterio, 
utilizó una llave legendaria que había heredado de su abuela para abrirla.
Al cruzar la puerta, Aria se encontró en un mundo deslumbrante donde las estaciones 
cambiaban en ciclos armoniosos. Maravillada, descubrió que este lugar era el Reino de 
las Estaciones Cambiantes, y era el equilibrio necesario para el reino de Eteria.
Aria conoció a cuatro guardianes mágicos, cada uno encargado de preservar y equilibrar 
una estación en el mundo exterior. Había Zephyr, el guardián de la primavera; Ember, 
la protectora del verano; Terra, la custodia del otoño; y Frost, el guardián del invierno.
Sin embargo, Aria también descubrió que un malvado hechicero llamado Umbra había sellado 
la puerta que conectaba ambos mundos para mantener las estaciones en Eteria eternamente. 
Este acto, hecho por celos y miedo a perder su poder, había sumido al Reino de las Estaciones Cambiantes en el caos.
Decidida a devolver el equilibrio, Aria se propuso liberar a las estaciones y derrotar a 
Umbra. Con la ayuda de los guardianes, emprendió un viaje por el Reino de las Estaciones 
Cambiantes, enfrentando desafíos mágicos y descubriendo la importancia de cada estación en 
la naturaleza y la vida.
A lo largo de su odisea, Aria aprendió valiosas lecciones de los guardianes y de los habitantes 
mágicos de cada estación. Se dio cuenta de que la belleza de la vida radica en la constante 
transformación y renovación. Con coraje y determinación, Aria enfrentó a Umbra en una épica 
batalla mágica, liberando las estaciones y restaurando el equilibrio entre ambos reinos.
Al regresar a Eteria, Aria compartió su experiencia con los habitantes, enseñándoles a apreciar 
la cambiante naturaleza de las estaciones y la importancia de aceptar el flujo constante de la vida. 
Desde entonces, Eteria floreció con la diversidad de las estaciones, y sus habitantes vivieron en 
armonía con la naturaleza que los rodeaba. Aria se convirtió en una leyenda, recordada como la 
valiente exploradora que trajo la magia de las estaciones a su reino

El Reino de las Estaciones Eternas

Hace mucho tiempo, en un reino lejano donde las estaciones del año duraban eternamente, 
vivía una joven llamada Aria. Este reino mágico, conocido como Eteria, estaba dividido 
en cuatro regiones, cada una gobernada por un ser místico que personificaba una estación.
Aria, curiosa y valiente, siempre se preguntaba por qué las estaciones no cambiaban en 
Eteria como lo hacían en otros lugares. Un día, explorando el bosque cercano, encontró 
una antigua puerta secreta decorada con runas mágicas. Decidida a descubrir el misterio, 
utilizó una llave legendaria que había heredado de su abuela para abrirla.
Al cruzar la puerta, Aria se encontró en un mundo deslumbrante donde las estaciones 
cambiaban en ciclos armoniosos. Maravillada, descubrió que este lugar era el Reino de 
las Estaciones Cambiantes, y era el equilibrio necesario para el reino de Eteria.
Aria conoció a cuatro guardianes mágicos, cada uno encargado de preservar y equilibrar 
una estación en el mundo exterior. Había Zephyr, el guardián de la primavera; Ember, 
la protectora del verano; Terra, la custodia del otoño; y Frost, el guardián del invierno.
Sin embargo, Aria también descubrió que un malvado hechicero llamado Umbra había sellado 
la puerta que conectaba ambos mundos para mantener las estaciones en Eteria eternamente. 
Este acto, hecho por celos y miedo a perder su poder, había sumido al Reino de las Estaciones Cambiantes en el caos.
Decidida a devolver el equilibrio, Aria se propuso liberar a las estaciones y derrotar a 
Umbra. Con la ayuda de los guardianes, emprendió un viaje por el Reino de las Estaciones 
Cambiantes, enfrentando desafíos mágicos y descubriendo la importancia de cada estación en 
la naturaleza y la vida.
A lo largo de su odisea, Aria aprendió valiosas lecciones de los guardianes y de los habitantes 
mágicos de cada estación. Se dio cuenta de que la belleza de la vida radica en la constante 
transformación y renovación. Con coraje y determinación, Aria enfrentó a Umbra en una épica 
batalla mágica, liberando las estaciones y restaurando el equilibrio entre ambos reinos.
Al regresar a Eteria, Aria compartió su experiencia con los habitantes, enseñándoles a apreciar 
la cambiante naturaleza de las estaciones y la importancia de aceptar el flujo constante de la vida. 
Desde entonces, Eteria floreció con la diversidad de las estaciones, y sus habitantes vivieron en 
armonía con la naturaleza que los rodeaba. Aria se convirtió en una leyenda, recordada como la 
valiente exploradora que trajo la magia de las estaciones a su reino

El Reino de las Estaciones Eternas

Hace mucho tiempo, en un reino lejano donde las estaciones del año duraban eternamente, 
vivía una joven llamada Aria. Este reino mágico, conocido como Eteria, estaba dividido 
en cuatro regiones, cada una gobernada por un ser místico que personificaba una estación.
Aria, curiosa y valiente, siempre se preguntaba por qué las estaciones no cambiaban en 
Eteria como lo hacían en otros lugares. Un día, explorando el bosque cercano, encontró 
una antigua puerta secreta decorada con runas mágicas. Decidida a descubrir el misterio, 
utilizó una llave legendaria que había heredado de su abuela para abrirla.
Al cruzar la puerta, Aria se encontró en un mundo deslumbrante donde las estaciones 
cambiaban en ciclos armoniosos. Maravillada, descubrió que este lugar era el Reino de 
las Estaciones Cambiantes, y era el equilibrio necesario para el reino de Eteria.
Aria conoció a cuatro guardianes mágicos, cada uno encargado de preservar y equilibrar 
una estación en el mundo exterior. Había Zephyr, el guardián de la primavera; Ember, 
la protectora del verano; Terra, la custodia del otoño; y Frost, el guardián del invierno.
Sin embargo, Aria también descubrió que un malvado hechicero llamado Umbra había sellado 
la puerta que conectaba ambos mundos para mantener las estaciones en Eteria eternamente. 
Este acto, hecho por celos y miedo a perder su poder, había sumido al Reino de las Estaciones Cambiantes en el caos.
Decidida a devolver el equilibrio, Aria se propuso liberar a las estaciones y derrotar a 
Umbra. Con la ayuda de los guardianes, emprendió un viaje por el Reino de las Estaciones 
Cambiantes, enfrentando desafíos mágicos y descubriendo la importancia de cada estación en 
la naturaleza y la vida.
A lo largo de su odisea, Aria aprendió valiosas lecciones de los guardianes y de los habitantes 
mágicos de cada estación. Se dio cuenta de que la belleza de la vida radica en la constante 
transformación y renovación. Con coraje y determinación, Aria enfrentó a Umbra en una épica 
batalla mágica, liberando las estaciones y restaurando el equilibrio entre ambos reinos.
Al regresar a Eteria, Aria compartió su experiencia con los habitantes, enseñándoles a apreciar 
la cambiante naturaleza de las estaciones y la importancia de aceptar el flujo constante de la vida. 
Desde entonces, Eteria floreció con la diversidad de las estaciones, y sus habitantes vivieron en 
armonía con la naturaleza que los rodeaba. Aria se convirtió en una leyenda, recordada como la 
valiente exploradora que trajo la magia de las estaciones a su reino

`).then(e => console.log(`Código finalizado, ${e} mensagens enviadas`)).catch(console.error)