#include "ofApp.h"

//--------------------------------------------------------------
void ofApp::setup(){
    grabber.initGrabber(640, 480);
}

//--------------------------------------------------------------
void ofApp::update(){
    shader.load("shaders/livecoding");
    grabber.update();
}

//--------------------------------------------------------------
void ofApp::draw(){
    shader.begin();
    shader.setUniform1f("time", ofGetElapsedTimef());
    shader.setUniform1f("width", ofGetWidth());
    shader.setUniform1f("height", ofGetHeight());
    shader.setUniform2f("mouse", mouseX, mouseY);
    
    // ofDrawRectangle(0, 0, ofGetWidth(), ofGetHeight());
    grabber.draw(0, 0, ofGetWidth(), ofGetHeight());
    
    shader.end();
    
}

//--------------------------------------------------------------
void ofApp::keyPressed(int key){

}

//--------------------------------------------------------------
void ofApp::keyReleased(int key){

}

//--------------------------------------------------------------
void ofApp::mouseMoved(int x, int y ){

}

//--------------------------------------------------------------
void ofApp::mouseDragged(int x, int y, int button){

}

//--------------------------------------------------------------
void ofApp::mousePressed(int x, int y, int button){

}

//--------------------------------------------------------------
void ofApp::mouseReleased(int x, int y, int button){

}

//--------------------------------------------------------------
void ofApp::mouseEntered(int x, int y){

}

//--------------------------------------------------------------
void ofApp::mouseExited(int x, int y){

}

//--------------------------------------------------------------
void ofApp::windowResized(int w, int h){

}

//--------------------------------------------------------------
void ofApp::gotMessage(ofMessage msg){

}

//--------------------------------------------------------------
void ofApp::dragEvent(ofDragInfo dragInfo){ 

}
