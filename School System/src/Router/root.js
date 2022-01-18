const express = require('express');
const Student = require('../model/students');
const router = new express.Router();

router.get('/root', (req, res) => {
    console.log("root");
    res.send("root");
});

router.post('/students', async (req, res) => {
    try {
        const stuInfo = new Student(req.body);
        const addStu = await stuInfo.save();
        if (addStu) {
            res.status(200).send("Student Enrolled");
            console.log("Student Enrolled");
        }
        else {
            res.status(400).send("Student Not Enrolled");
            console.log("Student Not Enrolled");
        }
        res.status(200).send("ok done");
        console.log("ok done");
    }
    catch (error) {
        res.status(400).send("Some Error to Add Stundet " + error);
        console.log("Some Error to Add Student " + error);
    }
});

router.get('/students', async (req, res) => {
    try {
        const getStudent = await Student.find();
        if (getStudent) {
            res.status(200).send(getStudent);
        }
        else {
            res.status(400).send("Can't Find Any Students");
        }
    } catch (error) {
        res.status(400).send("Some Error to Find Student " + error);
        console.log("Some Error to Find Student " + error);
        
    }
})

router.get('/students/:id', async (req, res) => {
    try {
        const stu_id = req.params.id;
        const getStudentData = await Student.find({ _id: stu_id });
        if (getStudentData) {
            res.status(200).send(getStudentData);
        }
        else {
            res.status(200).send("Can't Find Any Student of id: " + stu_id);
        }
    } catch (error) {
        res.status(400).send("Some Error to Find Student " + error);
        console.log("Some Error to Find Student " + error);
        
    }
})

router.patch('/stundets/:id', async (req, res) => {
    try {
        const stu_id = req.params.id;
        const newData = req.body;
        console.log(newData);
        const updateStudentData = await Student.findByIdAndUpdate({ _id: stu_id }, newData, {
            new: true //For see updated data optinal
        });
        if (updateStudentData) {
            res.status(200).send(updateStudentData);
        }
        else {
            res.status(400).send("Can't Update Student Data");
        }
    }
    catch (error) {
        console.log("Some Error to Update Student Data " + error);
        res.status(400).send("Some Error to Update Student Data " + error);
    }
})

router.delete('/students/:id', async(req, res) => {
    try {
        const _id = req.params.id;
        const deleteStudentData = await Student.findByIdAndDelete({ _id });//if key is same as get id's store variable name then you can write one
        if (deleteStudentData) {
            res.status(200).send(deleteStudentData);
        }
        else {
            res.status(400).send("Student Data Not Found");
        }
    } catch (error) {
        console.log("Some Error to Delete Student Data " + error);
        res.status(400).send("Some Error to Delete Student Data " + error);
    }
})

module.exports = router