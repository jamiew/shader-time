#version 120

uniform float time;
uniform float width;
uniform float height;
uniform vec2 mouse;
uniform sampler2DRect tex0;

void main( void )
{
		float x = gl_FragCoord.x;
		float y = gl_FragCoord.y;

    vec2 point;
    point.x = x;
    point.y = y;

		float pi = 3.1415926535;

    vec2 center;
    center.x = width * 0.5;
    center.y = height * 0.5;

    vec2 center2;
    center2.x = width * 0.5 * abs(1 - sin(time));
    center2.y = width * 0.5 * abs(1 - cos(time));

    // float red = (sin(x / y) * sin(x / y) + 1.0) * 0.5;
    // float red = sin(x * (1.0 + time)) * 0.5;
    // float red = 1.0 - distance(point, center) / (width * 0.15);
    float red = 1.0 - distance(point, mouse) / (width * 0.15);

    // float green = sin(x * time * 100.0);
    // float green = sin(x/y + (time * 2) + 1) * 0.5;
    // float green = 1.0 - distance(point, center) / (width * 0.1);
    // float green = 1.0 - distance(point, mouse) / (width * 0.05);
    float green = 0.0;

    // float blue = sin(y/x + (time * 3) + 1) * 0.5;
    float blue = 0.0;

    bool inCircle = false;
    float radius = 4.5;
    int numCircles = 30;

    for(float i = 1.0; i < numCircles; i++){
    	vec2 circle;
    	circle.x = width * 0.5 + sin(i * time * 0.11) * (width * 0.3);
    	circle.y = height * 0.5 + cos(i * time * 0.1) * (height * 0.3);
    	// inCircle = inCircle || distance(point, circle) < 10;
    	if(distance(point, circle) < (i * radius)) {
    		inCircle = true;
    	}
    }

    if (inCircle) {
    	red = texture2DRect(tex0, gl_TexCoord[0].st).r;
			green = texture2DRect(tex0, gl_TexCoord[0].st).g;
	    blue = texture2DRect(tex0, gl_TexCoord[0].st).b;

	    red += 1.0 - sin(distance(center, point));
	    green += abs(sin(time));
	    blue += abs(cos(time));
	    // green = sin(distance(center, point));
	    // blue = 1.0 - cos(time);
    }
    else {
    	red = cos(distance(point, center));
    	green = sin(distance(center, point) * (time * 0.2));
    	blue = sin(time * 2.0);


    }

    // float green = (sin(y * 0.5) + 1.0) * 0.5;


    gl_FragColor = vec4(red, green, blue, 1);
}
