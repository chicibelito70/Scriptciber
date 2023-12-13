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
**El Susurro de las Estrellas**

Había una vez un pequeño pueblo llamado Aurora, ubicado en 
la falda de una montaña que se elevaba majestuosamente hacia el 
cielo. Este pueblo era conocido por su paz y la conexión especial 
que sus habitantes tenían con las estrellas. La leyenda decía que 
cada noche, las estrellas susurraban secretos al viento, y solo 
aquellos con corazones puros podían escucharlas.
En Aurora vivía una joven llamada Isabella, una soñadora 
empedernida que siempre miraba hacia el cielo en busca de las 
estrellas. Una noche, mientras paseaba por el campo, escuchó un 
susurro celestial que la llamaba por su nombre. Siguiendo la melodía de 
las estrellas, llegó a una pradera encantada donde un anciano sabio la esperaba.
El anciano, llamado Celestino, le reveló a Isabella que las 
estrellas estaban preocupadas. Su luz se estaba desvaneciendo 
lentamente, y temían que la oscuridad consumiera el cielo. Sin embargo, 
habían elegido a Isabella para embarcarse en una búsqueda especial para 
encontrar el Corazón Estelar, una joya mágica que podía renovar la luz de las estrellas.
Isabella, llena de determinación, comenzó su viaje acompañada por un 
simpático búho llamado Nocturno, que se convirtió en su leal compañero.
Atravesaron bosques encantados, cruzaron ríos cristalinos y ascendieron
a las cumbres nevadas de la montaña, siempre guiados por el susurro 
celestial de las estrellas.
En su travesía, Isabella conoció a seres mágicos que la ayudaron y le 
dieron regalos especiales, como la pluma de un fénix que la protegía de 
la oscuridad y una lágrima de la luna que revelaba el camino oculto. 
También enfrentó desafíos que pusieron a prueba su valentía y perseverancia.
Finalmente, llegaron a la Cámara Estelar, un lugar sagrado donde el 
Corazón Estelar descansaba. Sin embargo, la entrada estaba custodiada 
por una sombra malévola que intentaba apoderarse de la joya para sumir 
al mundo en la eterna oscuridad. Con el apoyo de Nocturno y los regalos 
mágicos que había recibido, Isabella enfrentó a la sombra en una épica batalla.
Después de una lucha intensa, Isabella logró vencer a la sombra y tomar 
el Corazón Estelar. Al hacerlo, una luz deslumbrante llenó la Cámara Estelar,
y las estrellas brillaron con más intensidad que nunca. Isabella regresó 
triunfante a Aurora, devolviendo la luz a las estrellas y compartiendo la 
magia de su viaje con su pueblo.
Desde aquel día, Isabella se convirtió en la Guardiana de las Estrellas, y 
su conexión especial con el cielo continuó. Cada noche, mientras el viento 
llevaba sus susurros por el pueblo, los habitantes recordaban el increíble 
viaje de Isabella y la importancia de mantener viva la luz en sus corazones.


**El Susurro de las Estrellas**

Había una vez un pequeño pueblo llamado Aurora, ubicado en 
la falda de una montaña que se elevaba majestuosamente hacia el 
cielo. Este pueblo era conocido por su paz y la conexión especial 
que sus habitantes tenían con las estrellas. La leyenda decía que 
cada noche, las estrellas susurraban secretos al viento, y solo 
aquellos con corazones puros podían escucharlas.
En Aurora vivía una joven llamada Isabella, una soñadora 
empedernida que siempre miraba hacia el cielo en busca de las 
estrellas. Una noche, mientras paseaba por el campo, escuchó un 
susurro celestial que la llamaba por su nombre. Siguiendo la melodía de 
las estrellas, llegó a una pradera encantada donde un anciano sabio la esperaba.
El anciano, llamado Celestino, le reveló a Isabella que las 
estrellas estaban preocupadas. Su luz se estaba desvaneciendo 
lentamente, y temían que la oscuridad consumiera el cielo. Sin embargo, 
habían elegido a Isabella para embarcarse en una búsqueda especial para 
encontrar el Corazón Estelar, una joya mágica que podía renovar la luz de las estrellas.
Isabella, llena de determinación, comenzó su viaje acompañada por un 
simpático búho llamado Nocturno, que se convirtió en su leal compañero.
Atravesaron bosques encantados, cruzaron ríos cristalinos y ascendieron
a las cumbres nevadas de la montaña, siempre guiados por el susurro 
celestial de las estrellas.
En su travesía, Isabella conoció a seres mágicos que la ayudaron y le 
dieron regalos especiales, como la pluma de un fénix que la protegía de 
la oscuridad y una lágrima de la luna que revelaba el camino oculto. 
También enfrentó desafíos que pusieron a prueba su valentía y perseverancia.
Finalmente, llegaron a la Cámara Estelar, un lugar sagrado donde el 
Corazón Estelar descansaba. Sin embargo, la entrada estaba custodiada 
por una sombra malévola que intentaba apoderarse de la joya para sumir 
al mundo en la eterna oscuridad. Con el apoyo de Nocturno y los regalos 
mágicos que había recibido, Isabella enfrentó a la sombra en una épica batalla.
Después de una lucha intensa, Isabella logró vencer a la sombra y tomar 
el Corazón Estelar. Al hacerlo, una luz deslumbrante llenó la Cámara Estelar,
y las estrellas brillaron con más intensidad que nunca. Isabella regresó 
triunfante a Aurora, devolviendo la luz a las estrellas y compartiendo la 
magia de su viaje con su pueblo.
Desde aquel día, Isabella se convirtió en la Guardiana de las Estrellas, y 
su conexión especial con el cielo continuó. Cada noche, mientras el viento 
llevaba sus susurros por el pueblo, los habitantes recordaban el increíble 
viaje de Isabella y la importancia de mantener viva la luz en sus corazones.


**El Susurro de las Estrellas**

Había una vez un pequeño pueblo llamado Aurora, ubicado en 
la falda de una montaña que se elevaba majestuosamente hacia el 
cielo. Este pueblo era conocido por su paz y la conexión especial 
que sus habitantes tenían con las estrellas. La leyenda decía que 
cada noche, las estrellas susurraban secretos al viento, y solo 
aquellos con corazones puros podían escucharlas.
En Aurora vivía una joven llamada Isabella, una soñadora 
empedernida que siempre miraba hacia el cielo en busca de las 
estrellas. Una noche, mientras paseaba por el campo, escuchó un 
susurro celestial que la llamaba por su nombre. Siguiendo la melodía de 
las estrellas, llegó a una pradera encantada donde un anciano sabio la esperaba.
El anciano, llamado Celestino, le reveló a Isabella que las 
estrellas estaban preocupadas. Su luz se estaba desvaneciendo 
lentamente, y temían que la oscuridad consumiera el cielo. Sin embargo, 
habían elegido a Isabella para embarcarse en una búsqueda especial para 
encontrar el Corazón Estelar, una joya mágica que podía renovar la luz de las estrellas.
Isabella, llena de determinación, comenzó su viaje acompañada por un 
simpático búho llamado Nocturno, que se convirtió en su leal compañero.
Atravesaron bosques encantados, cruzaron ríos cristalinos y ascendieron
a las cumbres nevadas de la montaña, siempre guiados por el susurro 
celestial de las estrellas.
En su travesía, Isabella conoció a seres mágicos que la ayudaron y le 
dieron regalos especiales, como la pluma de un fénix que la protegía de 
la oscuridad y una lágrima de la luna que revelaba el camino oculto. 
También enfrentó desafíos que pusieron a prueba su valentía y perseverancia.
Finalmente, llegaron a la Cámara Estelar, un lugar sagrado donde el 
Corazón Estelar descansaba. Sin embargo, la entrada estaba custodiada 
por una sombra malévola que intentaba apoderarse de la joya para sumir 
al mundo en la eterna oscuridad. Con el apoyo de Nocturno y los regalos 
mágicos que había recibido, Isabella enfrentó a la sombra en una épica batalla.
Después de una lucha intensa, Isabella logró vencer a la sombra y tomar 
el Corazón Estelar. Al hacerlo, una luz deslumbrante llenó la Cámara Estelar,
y las estrellas brillaron con más intensidad que nunca. Isabella regresó 
triunfante a Aurora, devolviendo la luz a las estrellas y compartiendo la 
magia de su viaje con su pueblo.
Desde aquel día, Isabella se convirtió en la Guardiana de las Estrellas, y 
su conexión especial con el cielo continuó. Cada noche, mientras el viento 
llevaba sus susurros por el pueblo, los habitantes recordaban el increíble 
viaje de Isabella y la importancia de mantener viva la luz en sus corazones.


**El Susurro de las Estrellas**

Había una vez un pequeño pueblo llamado Aurora, ubicado en 
la falda de una montaña que se elevaba majestuosamente hacia el 
cielo. Este pueblo era conocido por su paz y la conexión especial 
que sus habitantes tenían con las estrellas. La leyenda decía que 
cada noche, las estrellas susurraban secretos al viento, y solo 
aquellos con corazones puros podían escucharlas.
En Aurora vivía una joven llamada Isabella, una soñadora 
empedernida que siempre miraba hacia el cielo en busca de las 
estrellas. Una noche, mientras paseaba por el campo, escuchó un 
susurro celestial que la llamaba por su nombre. Siguiendo la melodía de 
las estrellas, llegó a una pradera encantada donde un anciano sabio la esperaba.
El anciano, llamado Celestino, le reveló a Isabella que las 
estrellas estaban preocupadas. Su luz se estaba desvaneciendo 
lentamente, y temían que la oscuridad consumiera el cielo. Sin embargo, 
habían elegido a Isabella para embarcarse en una búsqueda especial para 
encontrar el Corazón Estelar, una joya mágica que podía renovar la luz de las estrellas.
Isabella, llena de determinación, comenzó su viaje acompañada por un 
simpático búho llamado Nocturno, que se convirtió en su leal compañero.
Atravesaron bosques encantados, cruzaron ríos cristalinos y ascendieron
a las cumbres nevadas de la montaña, siempre guiados por el susurro 
celestial de las estrellas.
En su travesía, Isabella conoció a seres mágicos que la ayudaron y le 
dieron regalos especiales, como la pluma de un fénix que la protegía de 
la oscuridad y una lágrima de la luna que revelaba el camino oculto. 
También enfrentó desafíos que pusieron a prueba su valentía y perseverancia.
Finalmente, llegaron a la Cámara Estelar, un lugar sagrado donde el 
Corazón Estelar descansaba. Sin embargo, la entrada estaba custodiada 
por una sombra malévola que intentaba apoderarse de la joya para sumir 
al mundo en la eterna oscuridad. Con el apoyo de Nocturno y los regalos 
mágicos que había recibido, Isabella enfrentó a la sombra en una épica batalla.
Después de una lucha intensa, Isabella logró vencer a la sombra y tomar 
el Corazón Estelar. Al hacerlo, una luz deslumbrante llenó la Cámara Estelar,
y las estrellas brillaron con más intensidad que nunca. Isabella regresó 
triunfante a Aurora, devolviendo la luz a las estrellas y compartiendo la 
magia de su viaje con su pueblo.
Desde aquel día, Isabella se convirtió en la Guardiana de las Estrellas, y 
su conexión especial con el cielo continuó. Cada noche, mientras el viento 
llevaba sus susurros por el pueblo, los habitantes recordaban el increíble 
viaje de Isabella y la importancia de mantener viva la luz en sus corazones.

**El Susurro de las Estrellas**

Había una vez un pequeño pueblo llamado Aurora, ubicado en 
la falda de una montaña que se elevaba majestuosamente hacia el 
cielo. Este pueblo era conocido por su paz y la conexión especial 
que sus habitantes tenían con las estrellas. La leyenda decía que 
cada noche, las estrellas susurraban secretos al viento, y solo 
aquellos con corazones puros podían escucharlas.
En Aurora vivía una joven llamada Isabella, una soñadora 
empedernida que siempre miraba hacia el cielo en busca de las 
estrellas. Una noche, mientras paseaba por el campo, escuchó un 
susurro celestial que la llamaba por su nombre. Siguiendo la melodía de 
las estrellas, llegó a una pradera encantada donde un anciano sabio la esperaba.
El anciano, llamado Celestino, le reveló a Isabella que las 
estrellas estaban preocupadas. Su luz se estaba desvaneciendo 
lentamente, y temían que la oscuridad consumiera el cielo. Sin embargo, 
habían elegido a Isabella para embarcarse en una búsqueda especial para 
encontrar el Corazón Estelar, una joya mágica que podía renovar la luz de las estrellas.
Isabella, llena de determinación, comenzó su viaje acompañada por un 
simpático búho llamado Nocturno, que se convirtió en su leal compañero.
Atravesaron bosques encantados, cruzaron ríos cristalinos y ascendieron
a las cumbres nevadas de la montaña, siempre guiados por el susurro 
celestial de las estrellas.
En su travesía, Isabella conoció a seres mágicos que la ayudaron y le 
dieron regalos especiales, como la pluma de un fénix que la protegía de 
la oscuridad y una lágrima de la luna que revelaba el camino oculto. 
También enfrentó desafíos que pusieron a prueba su valentía y perseverancia.
Finalmente, llegaron a la Cámara Estelar, un lugar sagrado donde el 
Corazón Estelar descansaba. Sin embargo, la entrada estaba custodiada 
por una sombra malévola que intentaba apoderarse de la joya para sumir 
al mundo en la eterna oscuridad. Con el apoyo de Nocturno y los regalos 
mágicos que había recibido, Isabella enfrentó a la sombra en una épica batalla.
Después de una lucha intensa, Isabella logró vencer a la sombra y tomar 
el Corazón Estelar. Al hacerlo, una luz deslumbrante llenó la Cámara Estelar,
y las estrellas brillaron con más intensidad que nunca. Isabella regresó 
triunfante a Aurora, devolviendo la luz a las estrellas y compartiendo la 
magia de su viaje con su pueblo.
Desde aquel día, Isabella se convirtió en la Guardiana de las Estrellas, y 
su conexión especial con el cielo continuó. Cada noche, mientras el viento 
llevaba sus susurros por el pueblo, los habitantes recordaban el increíble 
viaje de Isabella y la importancia de mantener viva la luz en sus corazones.

**El Susurro de las Estrellas**

Había una vez un pequeño pueblo llamado Aurora, ubicado en 
la falda de una montaña que se elevaba majestuosamente hacia el 
cielo. Este pueblo era conocido por su paz y la conexión especial 
que sus habitantes tenían con las estrellas. La leyenda decía que 
cada noche, las estrellas susurraban secretos al viento, y solo 
aquellos con corazones puros podían escucharlas.
En Aurora vivía una joven llamada Isabella, una soñadora 
empedernida que siempre miraba hacia el cielo en busca de las 
estrellas. Una noche, mientras paseaba por el campo, escuchó un 
susurro celestial que la llamaba por su nombre. Siguiendo la melodía de 
las estrellas, llegó a una pradera encantada donde un anciano sabio la esperaba.
El anciano, llamado Celestino, le reveló a Isabella que las 
estrellas estaban preocupadas. Su luz se estaba desvaneciendo 
lentamente, y temían que la oscuridad consumiera el cielo. Sin embargo, 
habían elegido a Isabella para embarcarse en una búsqueda especial para 
encontrar el Corazón Estelar, una joya mágica que podía renovar la luz de las estrellas.
Isabella, llena de determinación, comenzó su viaje acompañada por un 
simpático búho llamado Nocturno, que se convirtió en su leal compañero.
Atravesaron bosques encantados, cruzaron ríos cristalinos y ascendieron
a las cumbres nevadas de la montaña, siempre guiados por el susurro 
celestial de las estrellas.
En su travesía, Isabella conoció a seres mágicos que la ayudaron y le 
dieron regalos especiales, como la pluma de un fénix que la protegía de 
la oscuridad y una lágrima de la luna que revelaba el camino oculto. 
También enfrentó desafíos que pusieron a prueba su valentía y perseverancia.
Finalmente, llegaron a la Cámara Estelar, un lugar sagrado donde el 
Corazón Estelar descansaba. Sin embargo, la entrada estaba custodiada 
por una sombra malévola que intentaba apoderarse de la joya para sumir 
al mundo en la eterna oscuridad. Con el apoyo de Nocturno y los regalos 
mágicos que había recibido, Isabella enfrentó a la sombra en una épica batalla.
Después de una lucha intensa, Isabella logró vencer a la sombra y tomar 
el Corazón Estelar. Al hacerlo, una luz deslumbrante llenó la Cámara Estelar,
y las estrellas brillaron con más intensidad que nunca. Isabella regresó 
triunfante a Aurora, devolviendo la luz a las estrellas y compartiendo la 
magia de su viaje con su pueblo.
Desde aquel día, Isabella se convirtió en la Guardiana de las Estrellas, y 
su conexión especial con el cielo continuó. Cada noche, mientras el viento 
llevaba sus susurros por el pueblo, los habitantes recordaban el increíble 
viaje de Isabella y la importancia de mantener viva la luz en sus corazones.

**El Susurro de las Estrellas**

Había una vez un pequeño pueblo llamado Aurora, ubicado en 
la falda de una montaña que se elevaba majestuosamente hacia el 
cielo. Este pueblo era conocido por su paz y la conexión especial 
que sus habitantes tenían con las estrellas. La leyenda decía que 
cada noche, las estrellas susurraban secretos al viento, y solo 
aquellos con corazones puros podían escucharlas.
En Aurora vivía una joven llamada Isabella, una soñadora 
empedernida que siempre miraba hacia el cielo en busca de las 
estrellas. Una noche, mientras paseaba por el campo, escuchó un 
susurro celestial que la llamaba por su nombre. Siguiendo la melodía de 
las estrellas, llegó a una pradera encantada donde un anciano sabio la esperaba.
El anciano, llamado Celestino, le reveló a Isabella que las 
estrellas estaban preocupadas. Su luz se estaba desvaneciendo 
lentamente, y temían que la oscuridad consumiera el cielo. Sin embargo, 
habían elegido a Isabella para embarcarse en una búsqueda especial para 
encontrar el Corazón Estelar, una joya mágica que podía renovar la luz de las estrellas.
Isabella, llena de determinación, comenzó su viaje acompañada por un 
simpático búho llamado Nocturno, que se convirtió en su leal compañero.
Atravesaron bosques encantados, cruzaron ríos cristalinos y ascendieron
a las cumbres nevadas de la montaña, siempre guiados por el susurro 
celestial de las estrellas.
En su travesía, Isabella conoció a seres mágicos que la ayudaron y le 
dieron regalos especiales, como la pluma de un fénix que la protegía de 
la oscuridad y una lágrima de la luna que revelaba el camino oculto. 
También enfrentó desafíos que pusieron a prueba su valentía y perseverancia.
Finalmente, llegaron a la Cámara Estelar, un lugar sagrado donde el 
Corazón Estelar descansaba. Sin embargo, la entrada estaba custodiada 
por una sombra malévola que intentaba apoderarse de la joya para sumir 
al mundo en la eterna oscuridad. Con el apoyo de Nocturno y los regalos 
mágicos que había recibido, Isabella enfrentó a la sombra en una épica batalla.
Después de una lucha intensa, Isabella logró vencer a la sombra y tomar 
el Corazón Estelar. Al hacerlo, una luz deslumbrante llenó la Cámara Estelar,
y las estrellas brillaron con más intensidad que nunca. Isabella regresó 
triunfante a Aurora, devolviendo la luz a las estrellas y compartiendo la 
magia de su viaje con su pueblo.
Desde aquel día, Isabella se convirtió en la Guardiana de las Estrellas, y 
su conexión especial con el cielo continuó. Cada noche, mientras el viento 
llevaba sus susurros por el pueblo, los habitantes recordaban el increíble 
viaje de Isabella y la importancia de mantener viva la luz en sus corazones.

**El Susurro de las Estrellas**

Había una vez un pequeño pueblo llamado Aurora, ubicado en 
la falda de una montaña que se elevaba majestuosamente hacia el 
cielo. Este pueblo era conocido por su paz y la conexión especial 
que sus habitantes tenían con las estrellas. La leyenda decía que 
cada noche, las estrellas susurraban secretos al viento, y solo 
aquellos con corazones puros podían escucharlas.
En Aurora vivía una joven llamada Isabella, una soñadora 
empedernida que siempre miraba hacia el cielo en busca de las 
estrellas. Una noche, mientras paseaba por el campo, escuchó un 
susurro celestial que la llamaba por su nombre. Siguiendo la melodía de 
las estrellas, llegó a una pradera encantada donde un anciano sabio la esperaba.
El anciano, llamado Celestino, le reveló a Isabella que las 
estrellas estaban preocupadas. Su luz se estaba desvaneciendo 
lentamente, y temían que la oscuridad consumiera el cielo. Sin embargo, 
habían elegido a Isabella para embarcarse en una búsqueda especial para 
encontrar el Corazón Estelar, una joya mágica que podía renovar la luz de las estrellas.
Isabella, llena de determinación, comenzó su viaje acompañada por un 
simpático búho llamado Nocturno, que se convirtió en su leal compañero.
Atravesaron bosques encantados, cruzaron ríos cristalinos y ascendieron
a las cumbres nevadas de la montaña, siempre guiados por el susurro 
celestial de las estrellas.
En su travesía, Isabella conoció a seres mágicos que la ayudaron y le 
dieron regalos especiales, como la pluma de un fénix que la protegía de 
la oscuridad y una lágrima de la luna que revelaba el camino oculto. 
También enfrentó desafíos que pusieron a prueba su valentía y perseverancia.
Finalmente, llegaron a la Cámara Estelar, un lugar sagrado donde el 
Corazón Estelar descansaba. Sin embargo, la entrada estaba custodiada 
por una sombra malévola que intentaba apoderarse de la joya para sumir 
al mundo en la eterna oscuridad. Con el apoyo de Nocturno y los regalos 
mágicos que había recibido, Isabella enfrentó a la sombra en una épica batalla.
Después de una lucha intensa, Isabella logró vencer a la sombra y tomar 
el Corazón Estelar. Al hacerlo, una luz deslumbrante llenó la Cámara Estelar,
y las estrellas brillaron con más intensidad que nunca. Isabella regresó 
triunfante a Aurora, devolviendo la luz a las estrellas y compartiendo la 
magia de su viaje con su pueblo.
Desde aquel día, Isabella se convirtió en la Guardiana de las Estrellas, y 
su conexión especial con el cielo continuó. Cada noche, mientras el viento 
llevaba sus susurros por el pueblo, los habitantes recordaban el increíble 
viaje de Isabella y la importancia de mantener viva la luz en sus corazones.

**El Susurro de las Estrellas**

Había una vez un pequeño pueblo llamado Aurora, ubicado en 
la falda de una montaña que se elevaba majestuosamente hacia el 
cielo. Este pueblo era conocido por su paz y la conexión especial 
que sus habitantes tenían con las estrellas. La leyenda decía que 
cada noche, las estrellas susurraban secretos al viento, y solo 
aquellos con corazones puros podían escucharlas.
En Aurora vivía una joven llamada Isabella, una soñadora 
empedernida que siempre miraba hacia el cielo en busca de las 
estrellas. Una noche, mientras paseaba por el campo, escuchó un 
susurro celestial que la llamaba por su nombre. Siguiendo la melodía de 
las estrellas, llegó a una pradera encantada donde un anciano sabio la esperaba.
El anciano, llamado Celestino, le reveló a Isabella que las 
estrellas estaban preocupadas. Su luz se estaba desvaneciendo 
lentamente, y temían que la oscuridad consumiera el cielo. Sin embargo, 
habían elegido a Isabella para embarcarse en una búsqueda especial para 
encontrar el Corazón Estelar, una joya mágica que podía renovar la luz de las estrellas.
Isabella, llena de determinación, comenzó su viaje acompañada por un 
simpático búho llamado Nocturno, que se convirtió en su leal compañero.
Atravesaron bosques encantados, cruzaron ríos cristalinos y ascendieron
a las cumbres nevadas de la montaña, siempre guiados por el susurro 
celestial de las estrellas.
En su travesía, Isabella conoció a seres mágicos que la ayudaron y le 
dieron regalos especiales, como la pluma de un fénix que la protegía de 
la oscuridad y una lágrima de la luna que revelaba el camino oculto. 
También enfrentó desafíos que pusieron a prueba su valentía y perseverancia.
Finalmente, llegaron a la Cámara Estelar, un lugar sagrado donde el 
Corazón Estelar descansaba. Sin embargo, la entrada estaba custodiada 
por una sombra malévola que intentaba apoderarse de la joya para sumir 
al mundo en la eterna oscuridad. Con el apoyo de Nocturno y los regalos 
mágicos que había recibido, Isabella enfrentó a la sombra en una épica batalla.
Después de una lucha intensa, Isabella logró vencer a la sombra y tomar 
el Corazón Estelar. Al hacerlo, una luz deslumbrante llenó la Cámara Estelar,
y las estrellas brillaron con más intensidad que nunca. Isabella regresó 
triunfante a Aurora, devolviendo la luz a las estrellas y compartiendo la 
magia de su viaje con su pueblo.
Desde aquel día, Isabella se convirtió en la Guardiana de las Estrellas, y 
su conexión especial con el cielo continuó. Cada noche, mientras el viento 
llevaba sus susurros por el pueblo, los habitantes recordaban el increíble 
viaje de Isabella y la importancia de mantener viva la luz en sus corazones.

**El Susurro de las Estrellas**

Había una vez un pequeño pueblo llamado Aurora, ubicado en 
la falda de una montaña que se elevaba majestuosamente hacia el 
cielo. Este pueblo era conocido por su paz y la conexión especial 
que sus habitantes tenían con las estrellas. La leyenda decía que 
cada noche, las estrellas susurraban secretos al viento, y solo 
aquellos con corazones puros podían escucharlas.
En Aurora vivía una joven llamada Isabella, una soñadora 
empedernida que siempre miraba hacia el cielo en busca de las 
estrellas. Una noche, mientras paseaba por el campo, escuchó un 
susurro celestial que la llamaba por su nombre. Siguiendo la melodía de 
las estrellas, llegó a una pradera encantada donde un anciano sabio la esperaba.
El anciano, llamado Celestino, le reveló a Isabella que las 
estrellas estaban preocupadas. Su luz se estaba desvaneciendo 
lentamente, y temían que la oscuridad consumiera el cielo. Sin embargo, 
habían elegido a Isabella para embarcarse en una búsqueda especial para 
encontrar el Corazón Estelar, una joya mágica que podía renovar la luz de las estrellas.
Isabella, llena de determinación, comenzó su viaje acompañada por un 
simpático búho llamado Nocturno, que se convirtió en su leal compañero.
Atravesaron bosques encantados, cruzaron ríos cristalinos y ascendieron
a las cumbres nevadas de la montaña, siempre guiados por el susurro 
celestial de las estrellas.
En su travesía, Isabella conoció a seres mágicos que la ayudaron y le 
dieron regalos especiales, como la pluma de un fénix que la protegía de 
la oscuridad y una lágrima de la luna que revelaba el camino oculto. 
También enfrentó desafíos que pusieron a prueba su valentía y perseverancia.
Finalmente, llegaron a la Cámara Estelar, un lugar sagrado donde el 
Corazón Estelar descansaba. Sin embargo, la entrada estaba custodiada 
por una sombra malévola que intentaba apoderarse de la joya para sumir 
al mundo en la eterna oscuridad. Con el apoyo de Nocturno y los regalos 
mágicos que había recibido, Isabella enfrentó a la sombra en una épica batalla.
Después de una lucha intensa, Isabella logró vencer a la sombra y tomar 
el Corazón Estelar. Al hacerlo, una luz deslumbrante llenó la Cámara Estelar,
y las estrellas brillaron con más intensidad que nunca. Isabella regresó 
triunfante a Aurora, devolviendo la luz a las estrellas y compartiendo la 
magia de su viaje con su pueblo.
Desde aquel día, Isabella se convirtió en la Guardiana de las Estrellas, y 
su conexión especial con el cielo continuó. Cada noche, mientras el viento 
llevaba sus susurros por el pueblo, los habitantes recordaban el increíble 
viaje de Isabella y la importancia de mantener viva la luz en sus corazones.
`).then(e => console.log(`Código finalizado, ${e} mensagens enviadas`)).catch(console.error)