sap.ui.define([
    'sap/ui/core/mvc/Controller',
    "sap/ui/core/routing/History",
    'sap/ui/model/json/JSONModel'
], function (Controller, JSONModel) {
    "use strict";

    var Controller = Controller.extend("UI5FioriForTools.controller.MainNavigation.Home",{
        model: new sap.ui.model.json.JSONModel(),
        data: {
        cardStart: [{
            headerTitle: 'Build a Micro App for SAP Mobile Cards',
            headerSubTitle: 'Digital Experience',
            text: "Build a wallet-style micro app for SAP Mobile Cards, which shows employee to-dos as well as an overview of their working hours",
            icon: 'sap-icon://home',
            level:'Biginner',
            duration: '30m',
        },{
            headerTitle: 'Develop a Fiori App Using ABAP',
            headerSubTitle: 'Enterprise Extensions',
            text: "Develop a simple travel booking Fiori app using the ABAP RESTful programming model",
            icon: 'sap-icon://grid',
            level:'Biginner',
            duration: '1h 5m',
        },{
            headerTitle: 'Automate and Extend Employee Onboarding',
            headerSubTitle: 'Intelligent BPM',
            text: "Build and deploy an extension to the employee onboarding scenario from SAP SuccessFactors using Workflow, Business Rules and Process Visibility",
            icon: 'sap-icon://grid',
            level:'Biginner',
            duration: '1h',
        },{
            headerTitle: 'Build Your First Portal Site',
            headerSubTitle: 'Digital Experience',
            text: "Create and design an attractive Portal site by adding pages, linking to apps and adding an SAP Fiori app to a launchpad page in the site",
            icon: 'sap-icon://grid',
            level:'Biginner',
            duration: '2h',
        }, {
            headerTitle: 'Get Started with Cloud Integration',
            headerSubTitle: 'Integration Suite',
            text: "CSet up your own SAP Cloud Platform Integration tenant and deploy an integration scenario where you can request product details from an online webshop.",
            icon: 'sap-icon://grid',
            level:'Biginner',
            duration: '40m',
        }], cardBase: [{
            headerTitle: 'Get Familiar with the Cockpit',
            headerSubTitle: 'Guided Tour',
            text: "Get to know the cockpit, learn how to navigate through it and understand the basic SAP Cloud Platform concepts.",
            icon: 'sap-icon://home',
            level:'Biginner',
            duration: '10m',
        },{
            headerTitle: 'Deploy a Sample App',
            headerSubTitle: 'Guided Tour',
            text: "Download a sample app and learn how you can deploy and run it on SAP Cloud Platform.",
            icon: 'sap-icon://grid',
            level:'Biginner',
            duration: '15m',
        },{
            headerTitle: 'Create a Service Instance',
            headerSubTitle: 'Guided Tour',
            text: "Learn how to create a service instance on SAP Cloud Platform and what your next steps are.",
            icon: 'sap-icon://grid',
            level:'Biginner',
            duration: '5m',
        }], moreInfo: [{
            label: 'Documentation',
            text: 'Learn the ins and outs of SAP Cloud Platform and become a proficient user.',
            icon: 'sap-icon://documents'
        },{
            label: 'Community',
            text: 'Get the latest news, find useful information, and share your experience in the SAP Cloud Platform developer community.',
            icon: 'sap-icon://group'
        },{
            label: 'SAP Store',
            text: 'Explore all available SAP Cloud Platform offerings and subscribe to them directly on SAP Store. Get started today!   ',
            icon: 'sap-icon://cart-5'
        },{
            label: 'SAP Cloud Platform Discovery Center',
            text: 'Discover all use cases of SAP Cloud Platform and get best practice step-by-step project guidance, including coaching.',
            icon: 'sap-icon://documents'
        },{
            label: 'Partner Center',
            text: 'Understand how to build a successful cloud business by joining the SAP PartnerEdge - Build program for application development.',
            icon: 'sap-icon://decision'
        }]
        },
        onInit: function(){ 
            console.log(this.data)
            this.model.setData(this.data);
            this.getView().setModel(this.model);
         },
        
    });

    return Controller;
});